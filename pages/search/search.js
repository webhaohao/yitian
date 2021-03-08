// pages/search/search.js

import { Api } from '../../utils/api';
const api = new Api();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    markers:[],
    currentLang:'cn'
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    api.getMarkers(markers=>{
      this.allMarkers = markers.filter(item=>item.type === 1);
      this.setData({
        markers:markers.filter(item=>item.type === 1)
      })
    })
  },
  onSearch(event){
    console.log(event);
    const {detail:value} = event;
    console.log(value);
    const {allMarkers} = this;
    console.log('allMarkers',allMarkers);
    const _markers = allMarkers.filter(item=>item.cn.title.includes(value));
    console.log(_markers);
    this.setData({
      markers:_markers
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
