let app = new getApp();

Component({
  data: {
    isShowLangItems: false,
    languages: [
      {
        value: 'cn',
        icon:'/images/China.png'
      },
      {
        value: 'hk',
        icon: '/images/HK.jpg'
      },
      {
        value: 'en',
        icon: '/images/USA.png'
      },
    ]
  },
  properties: {
    // showModal: {
    //   type: Boolean,
    //   value: false
    // },
    // modalInfo: {
    //   type: Object,
    //   value: {}
    // }
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
      app.globalData.language = value || 'Chinese';
      this.triggerEvent('handleLanguageSelect', value, {});
      this.openLanguageSelect();
    }
  }

})
