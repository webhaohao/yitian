Component({
    // data: {
    //   showModal: true,
    // },
    properties:{
      showModal:{
         type:Boolean,
         value:false
      },
      modalInfo:{
        type:Object,
        value:{}
      },
      markerId:{
        type:Number,
        value:1
      },
      type:{
        type:String,
        value:''
      }
    },
    methods: {
        /**
       * 弹窗
       */
      showDialogBtn: function() {
        this.setData({
          showModal: true
        })
      },
      /**
       * 弹出框蒙层截断touchmove事件
       */
      preventTouchMove: function () {
      },
      /**
       * 隐藏模态对话框
       */
      hideModal: function () {
        this.triggerEvent('onCancel', false);
      },
      /**
       * 对话框取消按钮点击事件
       */
      onHandleDetail: function (event) {
        const { id } = event.currentTarget.dataset;
        this.triggerEvent('onCancel', false, {});
        this.triggerEvent('handleDetail', id, {});
      },
      /**
       * 对话框确认按钮点击事件
       */
      goHere: function (event) {
        const { id } = event.currentTarget.dataset;
        this.triggerEvent('onCancel', false, {});
        this.triggerEvent('goHere', id, {});
      }
    }
   
})