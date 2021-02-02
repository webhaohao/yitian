
Page({
  /**   * 页面的初始数据   */
  data: {
    latitude: 24.774812,
    longitude: 110.492977,
    subkey:'DT5BZ-4JO6P-GLND5-LJDT5-ID653-TVF4Z',
    markers: [
      {
        iconPath: "/images/restaurant.png",
        id: 4,
        latitude: 24.774812,
        longitude:  110.492977,
        width: 30,
        height: 30
      }
    ],
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
    // 分享效果
    onShareAppMessage () {
    return {
      title: `益田文创`,
      path: `pages/home/home`
    }
  }
})
    


