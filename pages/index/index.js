// pages/index/index.js
import { Api } from '../../utils/api';
const api = new Api();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    autoPlay:true,
    indicatorDots: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTopBanner()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  jumpMap(){
    wx.navigateTo({
      url: '../home/home',
    })
  },
  jumpList(){
    wx.navigateTo({
      url: '../list/list',
    })
  },

  getTopBanner(){
    api.getTopBanner(banners=>{
      console.log(banners); 
      this.setData({
        banners
      })
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