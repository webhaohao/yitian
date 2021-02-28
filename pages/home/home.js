import { Api } from '../../utils/api';
import { IsPtInPoly, ytPonits } from '../../utils/utils';
import Notify from '../../miniprogram_npm/vant-weapp/notify/notify';

const api = new Api();

const userNotYTMsg = '您当前的所在位置未在景区!';

const polylineStyle = {
  color: "#FFFFFF",
  width: 4,
  borderColor: "#1296DB",
  borderWidth: 1
};

Page({
  /**   * 页面的初始数据   */
  data: {
    type:1,
    latitude: 24.774812,
    longitude: 110.492977,
    subkey:'MPGBZ-RCT3D-AAQ4N-PBRKA-SVM7J-OBBBJ',
    markers:[],
    showModal:false,
    isShowSearch:false,
    modalInfo:{},
    toggleRoutes: false,
    userLatitude:'',
    userLongitude:'',
    scale:20,
    markerId: 1,
    popupShow:false,
    route: [
      Object.assign({ points: [] }, polylineStyle)
    ],
    locationTypeList:[],
    activeTypeList:[1]
  },
  default_markers:[],
  onReady(){
    this.getMarkersType();
    this.getMarkers();
  },

  onLoad(options) {
    console.log('options',options);
    const {id} = options;
    if(id){
      this.autoOpenModal(id);
    }
    this.mapCtx = wx.createMapContext('mapId');
    // this.mapCtx.on('markerClusterClick', res =>{
    //   console.log('markerClusterClick', res)
    // })

    // 使用默认聚合效果时可注释下一句
    // this.bindEvent()
  },

  getMarkers(){
    const {default_markers} = this;
    api.getMarkers((data)=>{
      const _markers = data.map(item=>({
          ...item,
          width:40,
          height:40
      }))
      this.default_markers = this.copyArr([..._markers,...default_markers]);
      this.setData({
        markers: this.default_markers
      })
    })
  },

  toggleSearch(){
    const {isShowSearch} = this.data;
    this.setData({
      isShowSearch:!isShowSearch
    })
  },
  onCancel(){
    this.setData({
      showModal:false
    })
  },
  jumpList(){
    wx.navigateTo({
      url:'/pages/list/list'
    })
  },
  goBack(){
    wx.navigateTo({
      url:'/pages/index/index'
    })
  },

  getMarkersType(){
    api.getMarkersType((locationTypeList)=>{
      // console.log('list',list);

      // 过滤掉景区
      this.setData({
        locationTypeList:locationTypeList.filter(item=>item.id !== 1)
      })
    })
  },

  handleTypeList(event){
    const {type} = event.currentTarget.dataset;
    const {default_markers} = this;
    const {locationTypeList,activeTypeList} = this.data;

    if(activeTypeList.includes(type)){
      const index = activeTypeList.findIndex(t=>t===type);
      console.log('index',index);
      activeTypeList.splice(index,1);
    }
    else{
      activeTypeList.push(type);
    }
    console.log('activeTypeList',activeTypeList);
    const markers = this.copyArr(default_markers);
    const _markers = markers.filter(item => activeTypeList.includes(item.type)) || [];
    this.setData({
      markers:_markers,
      locationTypeList,
      activeTypeList
    })
    this.includePoints(100);
  },

  includePoints(padding) {
    const {markers} = this.data;
    this.mapCtx.includePoints({
      padding: [padding, padding, padding, padding],
      points: markers
    });
  },
  handleDetail(event){
    const {detail} = event;
    wx.navigateTo({
      url:`/pages/detail/detail?id=${detail}`
    })
  },
  goHere(event){
    const {detail:id} = event;
    const currentMarker = this.default_markers.find(item=>item.id === id);
    const {latitude,longitude} = currentMarker;
    const {userLongitude,userLatitude} = this.data;
    if(userLongitude && userLatitude){
      this.drawPolyline(userLatitude,userLongitude,latitude, longitude);
    }
    else{
        this.getUserLocation(({userLatitude,userLongitude})=>{
          this.drawPolyline(userLatitude,userLongitude,latitude, longitude);
        })
    }
  },
  drawPolyline(userLatitude,userLongitude,latitude, longitude){
    this.setData({
      toggleRoutes:true,
      scale:5,
      "route[0].points":[
          {
            latitude: userLatitude,
            longitude: userLongitude
          },
          {
            latitude,
            longitude,
          }
      ]
    })
  },
  copyArr(arr){
    return JSON.parse(JSON.stringify(arr));
  },
  onCalloutTap(event){
  },
  getUserLocation(callBack){
    wx.getLocation({
      type: 'wgs84',
      success:(res)=> {
        // const speed = res.speed
        // const accuracy = res.accuracy
        const userLatitude = res.latitude;
        const userLongitude = res.longitude
        this.setData({
          userLatitude,
          userLongitude
        })
        // this.mapCtx.moveToLocation();
        callBack && callBack({userLatitude,userLongitude});
      },
      fail:()=>{
        // console.log('location fail');
        this.wxGetSetting((wxSetting) => {
          const { authSetting } = wxSetting;
          console.log('authSetting', authSetting);
          if (authSetting["scope.userLocation"] === false) {
            console.log('用户未授权定位');
            this.setData({
              popupShow:true
            })
            // wx.navigateTo({
            //   url:'../scope/scope'
            // });
          }
        });
        // this.wxOpenSetting();
      }
     })
  },
  handleOpensetting(event) {
    console.log(event);
    this.onPopupClose();
  },
  onPopupClose() {
    this.setData({
      popupShow:false
    })
  },

  autoOpenModal(markerId){
    api.getScenicById(markerId,(modalInfo)=>{
      this.setData({
        showModal:true,
        modalInfo,
        markerId,
        type:'scenic'
      })
    })
  },
  onMarkerTap(event){
    const {markerId} = event.detail;
    const {default_markers} = this;
    const {id,type} = default_markers.find(item=>item.id === markerId);
    // console.log(detailId);
    if(type === 1){
      api.getScenicById(id,(modalInfo)=>{
        console.log(modalInfo);
        this.setData({
          showModal:true,
          modalInfo,
          markerId:id,
          type
        })
      })
    }
    else{
      this.setData({
        showModal:true,
        modalInfo:{},
        markerId:id,
        type
      })
    }

  },
  moveToLocation(){
    const { userLongitude, userLatitude } = this.data;
    // debugger;
    // console.log('isPtInPoly', _isPtInPoly);

    if (userLongitude && userLatitude) {
      console.log('123');
      const _isPtInPoly = IsPtInPoly(userLatitude, userLongitude, ytPonits);
      if (!_isPtInPoly) {
        Notify({ type: 'danger', text: userNotYTMsg});
        return false;
      }
      this.mapCtx.moveToLocation();
    }
    else{
      this.getUserLocation(({ userLatitude, userLongitude }) => {
        const _isPtInPoly = IsPtInPoly(userLatitude, userLongitude, ytPonits);
        if (!_isPtInPoly) {
          Notify({ type: 'danger', text: userNotYTMsg});
          return false;
        }
        this.mapCtx.moveToLocation();
      });
    }

  },


  wxOpenSetting(){
    //console.log('wxOpenSetting');
    wx.openSetting({ success: res => {
      console.log(res);
    } });
  },

  wxGetSetting(callBack) {
    wx.getSetting({
      success:res=> {
        console.log('wxGetSetting', res);
        callBack(res);
      }
    })
  },
  jumpSearch(){
    wx.navigateTo({
      url:`/pages/search/search`
    })
  },
  onShow() {
    const { toggleRoutes } = this.data;
    if (toggleRoutes) {
      this.setData({
        toggleRoutes: false
      })
    }

  },
  // 分享效果
  onShareAppMessage () {
  return {
    title: `益田文创`,
    path: `pages/home/home`
  }
  }
})
