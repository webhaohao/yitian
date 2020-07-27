/**
 * Created by jimmy on 17/2/26.
 */

// var Base = require('../../utils/base.js').base;
import {Base} from './base.js';

class Home extends Base{
    constructor(){
        super();
    }
    uploadFileOpt(filePath,callback){
        wx.uploadFile({
            url: `${this.baseRestUrl}/v1/cat/upload` ,
            filePath,
            name: 'files',
            success (res) {
              callback(JSON.parse(res.data))
            }
        })
    }
};
let home = new Home();
let app = getApp();
const takePictures = ()=>{
  wx.chooseImage({
    count: 1, // 默认9
    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
    // 可以指定来源是相册还是相机，默认二者都有
    success(res) {
      wx.showLoading({title:'识别中...'})
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths;
      home.uploadFileOpt(tempFilePaths[0],(list)=>{
           wx.hideLoading();
           app.globalData.catList = list;
           wx.navigateTo({
             url: '../catList/catList'
           }) 
      });
    }
  });
}

export {takePictures}