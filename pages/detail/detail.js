import { Api } from '../../utils/api';
const api = new Api();
const app = new getApp();
Page({
    data:{
        detail:{},
        indicatorDots:true,
        autoPlay:true,
        currentLang:app.globalData.language,
    },
    onLoad(options){
        const {id} = options;
        api.getMarkerById(id,(detail)=>{
            this.setData({
                detail
            })
            const {currentLang} = this.data;
            wx.setNavigationBarTitle({
                title: detail[currentLang].title || ''
            })
        })
    },
    onReady(){
       
    },
    audioPlay(event){

    },
    handleLanguageSelect(event) {
        const { detail:currentLang } = event;
        this.setData({
          currentLang
        })
        const { detail } = this.data;
        wx.setNavigationBarTitle({
            title: detail[currentLang].title || ''
        })
    }
})