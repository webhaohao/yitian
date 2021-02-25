let app = new getApp();

Component({
  data: {
    isShowLangItems: false,
    languages: [
      {
        value: 'Chinese',
        icon:'/images/China.png'
      },
      {
        value: 'HK',
        icon: '/images/HK.jpg'
      },
      {
        value: 'English',
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
