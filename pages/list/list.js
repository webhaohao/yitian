import { Api } from '../../utils/api';
const api = new Api();
Page({
    data:{
      list:[]
    },
    onLoad(){
      api.getScenicList((list)=>{
        this.setData({
          list
        })
      })
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
      const { detail:languageValue } = event;
    }
})
