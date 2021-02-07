import { Api } from '../../utils/api';
const api = new Api();
Page({
    data:{
        detail:{},
        indicatorDots:true,
        autoPlay:true
    },
    onLoad(options){
        const {id} = options;
        api.getScenicById(id,(detail)=>{
            this.setData({
                detail
            })
            wx.setNavigationBarTitle({
                title: detail.title || ''
            })
        })
        // console.log('options',options);
    },
    onReady(){
       
    }

})