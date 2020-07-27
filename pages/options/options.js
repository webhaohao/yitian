let app =  getApp();  
import { takePictures } from '../../utils/utils';
const baseUrl = 'https://catseefun.happyhao.top/assets/';
Page({
  data: {
    optionCards:[
        {
            img:`${baseUrl}option-1.png`,
            path:'../science/science'
        },
        {
            img:`${baseUrl}option-2.png`,
            path:'../story/story'
        },
        {
            img:`${baseUrl}option-3.png`,
            path:''
        },
        {
            img:`${baseUrl}option-4.png`,
            path:''
        },
        {
            img:`${baseUrl}option-5.png`,
            path:''
        },
        {
            img:`${baseUrl}option-6.png`,
            path:''
        }
    ]
  },
  onLoad(options) {
        console.log('selectedCat',app.globalData.selectedCatInfo)
  },
  takePictures(){
    takePictures();
  },
  handleOptionClick(event){
    console.log(event);
    const {index} = event.currentTarget.dataset;
    const {optionCards} = this.data;
    const {path} = optionCards[index];
    console.log(path);
    path && wx.navigateTo({
        url: `${path}?id=${app.globalData.selectedCatInfo.id}`
    }) 
  }
})


