import { Api } from '../../utils/api';
const api = new Api();

Page({
  /**   * 页面的初始数据   */
  data: {
    latitude: 24.774812,
    longitude: 110.492977,
    subkey:'DT5BZ-4JO6P-GLND5-LJDT5-ID653-TVF4Z',
    markers:[],
    showModal:false,
    isShowSearch:false,
    modalInfo:{},
    toggleRoutes: false,
    userLatitude:'',
    userLongitude:'',
    scale:20,
    markerId:1,
    polylineStyle: {
         
    },
    route: [
      {
        points: [],
        color: "#FFFFFF",
        width: 4,
        borderColor: "#1296DB",
        borderWidth: 1
      }
    ],
    locationTypeList:[
      {
        path:'/images/restaurant.png',
        type:'restaurant',
        active:false
      },
      {
        path:'/images/wc_marker.png',
        type:'wc',
        active:false
      },
      {
        path:'/images/tea_marker.png',
        type:'tea',
        active:false
      },
      {
        path:'/images/supermarket_marker.png',
        type:'supermarket',
        active:false
      },
      // {
      //   path:'/images/root.png',
      //   type:'root',
      //   active:false
      // },
      // {
      //   path:'/images/mdownload.png',
      //   type:'mdownload',
      //   active:false
      // }
    ] 
  },
  default_markers:[
    {
      iconPath: "/images/restaurant.png",
      image:'/images/mark-bg-1.png',
      type:'restaurant',
      id: 1,
      latitude: 24.774812,
      longitude:  110.492977,
      width: 30,
      height: 30
    },
    {
      iconPath: "/images/wc_marker.png",
      image:'/images/mark-bg-1.png',
      type:'wc',
      id: 2,
      latitude: 24.774714,
      longitude: 110.493118,
      width: 30,
      height: 30,
    },
    {
      iconPath: "/images/tea_marker.png",
      image:'/images/mark-bg-1.png',
      type:'tea',
      id: 3,
      latitude: 24.774992,
      longitude:  110.492871,
      width: 30,
      height: 30
    },
    {
      iconPath: "/images/supermarket_marker.png",
      image:'/images/mark-bg-1.png',
      type:'supermarket',
      id: 4,
      latitude: 24.774894,
      longitude:  110.493182,
      width: 30,
      height: 30,
    },
    {
      iconPath: "/images/guxitai.png",
      image:'/images/mark-bg-1.png',
      type:'scenic',
      id: 5,
      latitude: 24.774996,
      longitude:  110.493182,
      width: 30,
      height: 30,
      detailId:1
    },
    {
      iconPath: "/images/baileqiao.png",
      image:'/images/mark-bg-1.png',
      type:'scenic',
      id: 6,
      latitude: 24.774071,
      longitude:  110.493574,
      width:40,
      height:40,
      detailId:3
    },
    {
      iconPath: "/images/lianxinqiao.png",
      image:'/images/mark-bg-1.png',
      type:'scenic',
      id: 7,
      latitude: 24.774281,
      longitude:  110.492168,
      width:40,
      height:40,
      detailId:2
    },
    {
      iconPath: "/images/xijieta.png",
      image:'/images/mark-bg-1.png',
      type:'scenic',
      id: 8,
      latitude: 24.774953,
      longitude: 110.493552,
      width:40,
      height:40,
      detailId:4
    },
    {
      iconPath: "/images/yuge.png",
      image:'/images/mark-bg-1.png',
      type:'scenic',
      id: 9,
      latitude: 24.774315,
      longitude: 110.492908,
      width:40,
      height:40,
      detailId:6
    },
    {
      iconPath: "/images/jiashan.png",
      image:'/images/mark-bg-1.png',
      type:'scenic',
      id: 10,
      latitude: 24.774666,
      longitude: 110.492769,
      width:40,
      height:40,
      detailId:7
    },
    {
      iconPath: "/images/paifang.png",
      image:'/images/mark-bg-1.png',
      type:'scenic',
      id: 11,
      latitude: 24.773833,
      longitude: 110.493938,
      width:40,
      height:40,
      detailId:8
    },
    {
      iconPath: "/images/zhuangyuanmen.png",
      image:'/images/mark-bg-1.png',
      type:'scenic',
      id: 12,
      latitude: 24.774227,
      longitude: 110.492662,
      width:40,
      height:40,
      detailId:5
    }
  ],
  onReady(){
    const {default_markers} = this;
    this.setData({
      markers:default_markers
    })
  },

  onLoad() {
    this.mapCtx = wx.createMapContext('mapId')
    // this.mapCtx.on('markerClusterClick', res =>{
    //   console.log('markerClusterClick', res)
    // })

    // 使用默认聚合效果时可注释下一句
    // this.bindEvent()
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
  handleTypeList(event){
    const {type} = event.currentTarget.dataset;
    const {locationTypeList} = this.data;
    const index = locationTypeList.findIndex(item=>item.type === type);
    locationTypeList[index].active = !locationTypeList[index].active;
    const act_type_list = locationTypeList.filter(item=>item.active === true).map(item=>item.type);
    const _act_type_list = [...act_type_list, 'scenic'];
    const { default_markers } = this;
    const markers = this.copyArr(default_markers);
    const _markers = markers.filter(item => _act_type_list.includes(item.type)) || [];
    this.setData({
      markers:_markers,
      locationTypeList
    })
    this.includePoints(100);
  },
  includePoints(padding) {
    const {markers} = this.data;
    this.mapCtx.includePoints({
      padding: [padding, padding, padding, padding],
      points: markers.filter(item=> item.type !== 'scenic')
    });
  },
  handleDetail(event){
    const {detail} = event;
    wx.navigateTo({
      url:`/pages/detail/detail?id=${detail}`
    })  
  },
  goHere(event){
    console.log('event',event)
    const {detail:id} = event;
    const currentMarker = this.default_markers.find(item=>item.id === id);
    console.log(currentMarker);
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
      "route[0].points": [
        {
          latitude:userLatitude,
          longitude:userLongitude
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
      }
     })
  },
  onMarkerTap(event){
    const {markerId} = event.detail;
    const {default_markers} = this;
    const {detailId,id} = default_markers.find(item=>item.id === markerId);
    console.log(detailId);
    if(detailId){
      api.getScenicById(detailId,(modalInfo)=>{
        console.log(modalInfo);
        this.setData({
          showModal:true,
          modalInfo,
          markerId:id
        }) 
      })
    }
    else{
      this.setData({
        showModal:true,
        modalInfo:{},
        markerId:id
      })
    }
    
  },
  moveToLocation(){
    const {userLongitude,userLatitude} = this.data;
    if(userLongitude && userLatitude){
      this.mapCtx.moveToLocation();
    }
    else{
      this.getUserLocation(()=>{
        this.mapCtx.moveToLocation();
      });
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
    


