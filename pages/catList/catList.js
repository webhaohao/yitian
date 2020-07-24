let app = getApp();
Page({
  data: {
    catList:[]
  },
  onLoad: function () {
      console.log(app.globalData.catList);
      this.setData({
        catList : app.globalData.catList
      })  
  },
})


