let app =  getApp();  
import { Science } from './story-model.js';
import { takePictures } from '../../utils/utils';
let science = new Science();
Page({
  data: {
    swiperCurrent:0,
    mapChinese:['一','二','三','四','五'],
    story:[
      {
        imgPath:'../../images/story-item-1.png',
        content:'  在六十年代的美国，动物科学家们以人工方式将波斯猫等长毛种的猫与美国短毛猫、缅甸猫等交配繁殖，经过不断地品种改良，加菲猫就慢慢定型成功了。 现如今的加菲猫（异国短毛猫）性格好静、可爱、温纯，不拘小节及忠诚（猫的忠诚度自然不能和狗狗相比）；另一方面，在外观上基本继承了波斯猫滑稽造型，和人亲近，常常令人忍俊不禁。'
      },
      {
        imgPath:'../../images/story-item-2.png',
        content:'  在六十年代的美国，动物科学家们以人工方式将波斯猫等长毛种的猫与美国短毛猫、缅甸猫等交配繁殖，经过不断地品种改良，加菲猫就慢慢定型成功了。 现如今的加菲猫（异国短毛猫）性格好静、可爱、温纯，不拘小节及忠诚（猫的忠诚度自然不能和狗狗相比）；另一方面，在外观上基本继承了波斯猫滑稽造型，和人亲近，常常令人忍俊不禁。'
      }
    ]
  },
  onLoad: function (options) {
    console.log('selectedCat',app.globalData.selectedCatInfo)
    console.log(options);
    const {id} = options;
    wx.showLoading({title:'加载中...'})
    science.getScience(id,(result)=>{
        console.log(result)
        wx.hideLoading();
        this.setData({
            scienceImgs:result.map(item=>item.imgUrl),
            selectedCatInfo:app.globalData.selectedCatInfo
        })
    })
  },
  takePictures(){
    takePictures()
  },
  handelSwiperChange(){

  }
})


