let app = new getApp();

Component({
  data: {
    isShowLangItems:true,
    currentLang:app.globalData.language,
    languages: [
      {
        value: 'cn',
        icon:'/images/cn.png'
      },
      {
        value: 'hk',
        icon: '/images/hk.png'
      },
      {
        value: 'en',
        icon: '/images/en.png'
      },
    ]
  },
  properties: {
    hiddenOption:{
      type:String,
      value:""
    }
  },
  lifetimes: {
    attached() {
      console.log('this.currentLang',this.data.currentLang);
      // 在组件实例进入页面节点树时执行
    },
    detached() {
     
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    openLanguageSelect(){
        const {isShowLangItems}  = this.data;
        this.setData({
          isShowLangItems:!isShowLangItems
        })
    },
    handleLanguageSelect(event) {
      const { value } = event.currentTarget.dataset;
      app.globalData.language = value || 'cn';
      this.setData({
        currentLang:value
      })
      this.triggerEvent('handleLanguageSelect', value, {});
      //this.openLanguageSelect();
    }
  }

})
