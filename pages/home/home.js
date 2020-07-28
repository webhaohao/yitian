import { takePictures } from '../../utils/utils';
Page({
  /**   * 页面的初始数据   */
  data: {
    attendSuccessImg: "",
    canvasImgUrl: '',
    src: "",
    close:true
  },
  // 点击照相
  takePictures(){
    takePictures();
  },
  onReady(){
    setInterval(() => {
      const {close} = this.data;
      this.setData({
          close:!close
      })
  }, 800);
  },
  onLoad() {
    
  }
})
    


