import { Api } from '../../utils/api';
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
const api = new Api();
const app = new getApp();
Page({
    data:{
      list:[],
      currentLang:app.globalData.language,
    },
    onLoad(){
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      });
      api.getMarkers((list)=>{
        Toast.clear();
        this.setData({
          list
        })
      },1)
    },
    onReady(){
    },
    handleDetail(event){
       console.log(event);
       const {id} = event.currentTarget.dataset;
        wx.navigateTo({
            url:`/pages/detail/detail?id=${id}`
        })
    },
    handleLanguageSelect(event) {
      console.log('eventList', event);
      const { detail:currentLang } = event;
      this.setData({
        currentLang
      })
    }
})
