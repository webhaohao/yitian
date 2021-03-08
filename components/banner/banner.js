import { Api } from '../../utils/api';
const api = new Api();
Component({
  data: {
     indicatorDots: true,
     autoPlay:true,
     banners:[]
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
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      api.getBanner((banners)=>{
        this.setData({
            banners
        })
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  }

})
