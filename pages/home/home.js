
Page({
  /**   * 页面的初始数据   */
  data: {
    latitude: 24.774812,
    longitude: 110.492977,
    subkey:'DT5BZ-4JO6P-GLND5-LJDT5-ID653-TVF4Z',
    markers: [
      {
        iconPath: "/images/restaurant.png",
        image:'/images/mark-bg-1.png',
        type:'restaurant',
        id: 1,
        latitude: 24.774812,
        longitude:  110.492977,
        width: 30,
        height: 30,
        customCallout: {
          anchorY: 0,
          anchorX: 20,
          display: 'BYCLICK',
        },
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
        customCallout: {
          anchorY: 0,
          anchorX: 20,
          display: 'BYCLICK',
        },
      },
      {
        iconPath: "/images/tea_marker.png",
        image:'/images/mark-bg-1.png',
        type:'tea',
        id: 3,
        latitude: 24.774992,
        longitude:  110.492871,
        width: 30,
        height: 30,
        customCallout: {
          anchorY: 0,
          anchorX: 20,
          display: 'BYCLICK',
        },
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
        customCallout: {
          anchorY: 0,
          anchorX: 20,
          display: 'BYCLICK',
        },
      }
    ],
    locationTypeList:[
      {
        path:'/images/restaurant_icon.png',
        type:'restaurant'
      },
      {
        path:'/images/wc.png',
        type:'wc'
      },
      {
        path:'/images/tea.png',
        type:'tea'
      },
      {
        path:'/images/supermarket.png',
        type:'supermarket'
      },
      {
        path:'/images/root.png',
        type:'root'
      },
      {
        path:'/images/mdownload.png',
        type:'mdownload'
      }
    ]
  },
  onReady(){
  },

  onLoad() {
    this.mapCtx = wx.createMapContext('mapId')
    // this.getUserLocation();
    // this.mapCtx.on('markerClusterClick', res =>{
    //   console.log('markerClusterClick', res)
    // })

    // 使用默认聚合效果时可注释下一句
    // this.bindEvent()
  },
  jumpList(){
    wx.navigateTo({
      url:'/pages/list/list'
    })
  },
  onHandleDetail(){
    console.log('detail');
  },
  onCalloutTap(event){
    console.log(event);
    console.log(123);
  },
  getUserLocation(){
    wx.getLocation({
      type: 'wgs84',
      success:(res)=> {
        // const latitude = res.latitude
        // const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })

      }
     })
  },
  onMarkerTap(event){
    console.log(event);

  },
  // 分享效果
  onShareAppMessage () {
  return {
    title: `益田文创`,
    path: `pages/home/home`
  }
  }
})
    


