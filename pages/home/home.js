import { Home } from './home-model.js';
let home = new Home();
let app = getApp();
Page({
  /**   * 页面的初始数据   */
  data: {
    attendSuccessImg: "",
    canvasImgUrl: '',
    src: ""
  },
  // 点击照相
  takePictures(){
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        home.uploadFileOpt(tempFilePaths[0],(list)=>{
             app.globalData.catList = list;
             wx.navigateTo({
               url: '../catList/catList'
             }) 
        });
      }
    });
  },
  onLoad() {
  }
})
    


