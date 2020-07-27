import { takePictures } from '../../utils/utils';
Page({
  /**   * 页面的初始数据   */
  data: {
    attendSuccessImg: "",
    canvasImgUrl: '',
    src: ""
  },
  // 点击照相
  takePictures(){
    takePictures();
  },
  onLoad() {
  }
})
    


