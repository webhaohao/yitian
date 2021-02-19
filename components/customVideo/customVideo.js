// components/customVideo/customVideo.js
const audioContext = wx.createInnerAudioContext();
let seekPosition = 0;
Component({

    /**
   * 组件的初始数据
   */
  data: {
    pause: true,
    playing: false,
    loading: false,
    sliderStep:1,
    audioDuration: 0,
  },
    /**
   * 组件的属性列表
   */
  properties: {
    videoSource:{
      type:String,
      value:''
    }
  },
  // observers: {
  //   'videoSource': function (val) {
  //     console.log(val);
  //   }
  // },
  // attached(){
  //   console.log('videoSource',this.properties.videoSource)
  // },
  methods:{
    audioPlay(event){
      console.log(event);
      const {src} = event.currentTarget.dataset;
      audioContext.src = src;
      audioContext.play();
      audioContext.onPlay(() => {
          this.setData({
            pause: false,
            playing: true,
            loading: false
          })
      })
      audioContext.onCanplay(() => {
        setTimeout(() => {
          this.setData({
            audioDuration:audioContext.duration
          })

        }, 500)

        this.audioStatus();
      })
    },
     //记录播放状态
    audioStatus() {
      //音频播放进度更新事件
      audioContext.onTimeUpdate(() => {
        // console.log('audioContext.onTimeUpdate')
        //console.log('audioContext.currentTime / this.data.audioDuration * 100',audioContext.currentTime / this.data.audioDuration * 100);
        seekPosition = audioContext.currentTime;
        this.setData({
          // currentProcess: ss.formatSecToMin(audioContext.currentTime),
          sliderValue: audioContext.currentTime / this.data.audioDuration * 100,
        })
      })
      //音频播放结束
      audioContext.onEnded(() => {
        seekPosition = 0;
        this.setData({
          sliderValue: 0,
          currentProcess: '00:00',
          playing: false,
          pause: true
        })
      })
    },
    //播放暂停
    audioPause() {
      audioContext.pause();
      this.setData({
        pause: true,
        playing: false,
        loading: false
      })
    },
  },


})
