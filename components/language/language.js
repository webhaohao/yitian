Component({
  data: {
      isShowLangItems:false
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
