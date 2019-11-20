//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',        
    videoSrc2:'https://connect-cdn-prd-cn.unitychina.cn/20190530/videos/0ca3f3b3-2e35-4805-8796-ea67f931f830_20190529_HDRP_PostProcessing.mp4',
    localVideo1:'../../video/demo.mp4'
  },
  onReady(res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  videoErrorCallback: function (e) {

    console.log('视频错误信息:' + e.detail.errMsg);

  }
})
