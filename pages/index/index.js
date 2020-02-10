//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '测试地图',
    playTime: "00:00",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    markers: [
      {
        iconPath: '../../images/location.png',
        id: 0,
        latitude: 31.26412172942719,
        longitude: 120.73971984065929,
        width: 50,
        height: 50
      }
    ],
    mapCtx: null,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log("onLoad");
    console.error("canUse = " + wx.canIUse("onLoad"))
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    let arr = getCurrentPages();

    console.info(JSON.stringify(arr))

    setTimeout(function(p){
      console.info("定时器执行 -> "+p);
    },2000,"100666");
    
  },
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
    
    wx.setStorage({
      key: 'hello',
      data: 'world',
      success: () => {
        console.log("存储成功");
      }
    });
  },
  onHide: function(){
    console.log("onHide");
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  wordTap(e) {
    console.log(e);
    wx.switchTab({
      url: '../test/test',
    })
  },
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
    this.mapCtx = wx.createMapContext("mymap", this);
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  }
})
