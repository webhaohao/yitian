import { takePictures } from '../../utils/utils';
Page({
  /**   * 页面的初始数据   */
  data: {
    attendSuccessImg: "",
    canvasImgUrl: '',
    src: "",
    close:true,
    isPhoneX:false
  },
  // 点击照相
  takePictures(){
    takePictures();
  },
  onReady(){
    wx.getSystemInfo({
      success:(res)=>{
        console.log(res);
        // 根据 model 进行判断
        if(res.model.search('iPhone X') !=-1 || res.model.search('iPhone 11') !=-1 ) {
            this.setData({
              isPhoneX:true
            })
        }
      }
    })
    setInterval(() => {
      const {close} = this.data;
      this.setData({
          close:!close
      })
    }, 800);
  },
   // 分享效果
   onShareAppMessage () {
    return {
      title: `益趣识猫`,
      path: `pages/home/home`
    }
  },
  onLoad() {
    
  }
})
    


