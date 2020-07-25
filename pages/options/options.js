let app =  getApp();  
Page({
  data: {
    optionCards:[
        {
            img:'option-1.png',
            path:'../science/science'
        },
        {
            img:'option-2.png',
            path:''
        },
        {
            img:'option-3.png',
            path:''
        },
        {
            img:'option-4.png',
            path:''
        },
        {
            img:'option-5.png',
            path:''
        },
        {
            img:'option-6.png',
            path:''
        }
    ]
  },
  onLoad(options) {
        console.log('selectedCat',app.globalData.selectedCatInfo)
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


