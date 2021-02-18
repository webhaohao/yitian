Component({
  data: {
    isShowLangItems: false,
    languages: [
      {
        value: 'Chinese',
        icon:'/images/China.png'
      },
      {
        value: 'Japan',
        icon: '/images/Japan.png'
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
    handleLanguageSelect(){
        const {isShowLangItems}  = this.data;
        this.setData({
          isShowLangItems:!isShowLangItems
        })
    },
  }

})
