let app =  getApp();  
import { Science } from './science-model.js';
let science = new Science();
Page({
  data: {
    swiperCurrent:0
  },
  onLoad: function (options) {
    console.log('selectedCat',app.globalData.selectedCatInfo)
    console.log(options);
    const {id} = options;
    science.getScience(id,(result)=>{
        console.log(result)
        this.setData({
            scienceImgs:result.map(item=>item.imgUrl)
        })
    })
  },
  handelSwiperChange(){

  }
})


