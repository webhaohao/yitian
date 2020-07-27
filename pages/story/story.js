let app =  getApp();  
import { Science } from './story-model.js';
let science = new Science();
Page({
  data: {
    swiperCurrent:0
  },
  onLoad: function (options) {
    console.log('selectedCat',app.globalData.selectedCatInfo)
    console.log(options);
    const {id} = options;
    wx.showLoading({title:'加载中...'})
    science.getScience(id,(result)=>{
        console.log(result)
        wx.hideLoading();
        this.setData({
            scienceImgs:result.map(item=>item.imgUrl),
            selectedCatInfo:app.globalData.selectedCatInfo
        })
    })
  },
  handelSwiperChange(){

  }
})


