let app =  getApp();  
import { takePictures } from '../../utils/utils';
import { Science } from './science-model.js';
let science = new Science();
Page({
  data: {
    swiperCurrent:0
  },
  takePictures(){
    takePictures()
  },
  onLoad(options) {
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


