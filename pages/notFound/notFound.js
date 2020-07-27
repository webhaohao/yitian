let app =  getApp();  
import { takePictures } from '../../utils/utils';
Page({
  data: {
  },
  onLoad(options) {
        console.log('selectedCat',app.globalData.selectedCatInfo)
  }
})


