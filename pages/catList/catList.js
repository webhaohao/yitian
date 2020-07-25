let app = getApp();
Page({
  data: {
    catList:[],
    swiperCurrent:0,
  },
  onLoad() {
      this.setData({
        catList : app.globalData.catList
      })  
  },
  onReady(){
    console.log(this.data.catList);
    this.animation = wx.createAnimation({
      duration:1000
    });
    this.tipAnimation = wx.createAnimation()
    this.isStartAnimation();
  },
  isStartAnimation(){
    const {catList,swiperCurrent} = this.data;
    const {result} = catList;
    if(result[swiperCurrent].catseefun){
        this.catseefunAniFun(true)
    }
    else{
        this.catseefunAniFun(false)
    }
  },
  catseefunAniFun(flag){
      const bottomValue = flag === true ? 0 : '-400rpx';
      const opacityValue = flag === true ? 1 : 0; 
      if(flag){
        this.tipAnimation.option.transition.delay=1000;
      }
      else{
        this.tipAnimation.option.transition.delay=0;
      }
      this.animation.bottom(bottomValue).step();
      this.tipAnimation.opacity(opacityValue).step();
      console.log(this.tipAnimation);
      this.setData({
        catseefunAni:this.animation.export(),
        tipAnimation:this.tipAnimation.export()
      })

  },
  prevSwiper(){
      const {swiperCurrent,catList} = this.data;
      const _swiperCurrent = swiperCurrent > 0 ? swiperCurrent-1 : catList['result'].length-1;
      console.log(_swiperCurrent);
      this.setData({
        swiperCurrent:_swiperCurrent
      })
      this.isStartAnimation()
  },
  nextSwiper(){
      const {swiperCurrent,catList} = this.data;
      const _swiperCurrent = swiperCurrent < catList['result'].length-1 ? swiperCurrent+1 : 0;
      this.setData({
        swiperCurrent:_swiperCurrent
      })
      this.isStartAnimation()
  },
  handelSwiperChange({detail:{current}}){
    const {catList:{result}} = this.data;
    if(result[current].catseefun){
        this.catseefunAniFun(true)
    }
    else{
        this.catseefunAniFun(false)
    }
  },
  handleOptions(){
    const {catList,swiperCurrent} = this.data;
    const {result} = catList;
    const selectedCat = result[swiperCurrent].catseefun;
    app.globalData.selectedCatInfo = selectedCat;
    wx.navigateTo({
      url: '../options/options'
    }) 
  }
})


