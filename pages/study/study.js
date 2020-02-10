// pages/study.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading();

    this.dialog = this.selectComponent("#dialog");
  },

  openDialog(){
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }

    var pages = getCurrentPages();
    console.log(JSON.stringify(pages))
    setTimeout(() => {
      wx.hideNavigationBarLoading();
    },2000);

    wx.setNavigationBarTitle({
      title: 'Study',
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#DE9531',
      animation: {
        duration: 500,
        timingFunc: "easeIn"
      }
    });

    wx.showTabBarRedDot({
      index: 3,
    });

    wx.setTabBarBadge({
      index: 3,
      text: '12',
    });

    wx.startPullDownRefresh({
      success: () => {
        console.log("下拉刷新完成");
        setTimeout(()=> {
          wx.stopPullDownRefresh({
            complete:() => {
              wx.pageScrollTo({
                scrollTop: 20,
                duration: 300
              })
            }
          });
        },2000);
      }
    });

    wx.getStorage({
      key: 'hello',
      success: function(res) {
        console.log("data = "+res.data);
      },
    });

    wx.getStorageInfo({
      success: function(res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉刷新");

    setTimeout(() => {
      wx.stopPullDownRefresh()
    },2000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  goSwiperView() {
    wx.navigateTo({
      url: '../swiper/swiper',
    })
  },
  clickRelaunch() {
    wx.reLaunch({
      url: '../form/form',
    })
  },
  showToast() {
    wx.showToast({
      title: "弹个框而已",
      mask: true,
      icon: 'none',
      image: "../../images/mount.jpg",
      success: () => {
        console.log("弹窗打开了");
      }
    })
  },
  showModal() {
    wx.showModal({
      title: '模态框',
      content: '就是简单的内容',
      confirmColor: "#0000FF",
      success: (res) => {
        if(res.confirm){
          console.log("点击了确定");
        }else if(res.cancel){
          console.log("点击了取消");
        }
      }
    })
  },
  showLoad() {
    wx.showLoading({
      title: '正在加载中',
      mask: true,
      success: () => {
        setTimeout(() => {
          wx.hideLoading();
        },2000);
      }
    })
  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ["A","B","C"],
      itemColor: "#FFDE32",
      success: (res) => {
        console.log("num = "+res.tapIndex);
      }
    })
  },
  openAnimation() {
    wx.navigateTo({
      url: '../animation/animation',
    })
  },
  openAlbum() {
    wx.chooseImage({
      count: 9,
      sourceType: ['album'],
      sizeType: ['compressed'],
      success: function(res) {},
    })
  },
  openCamera() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  openDocument() {
    wx.downloadFile({
      // 示例url,并不存在
      url: "http://example.com/somefile.pdf",
      success: (res) => {
        var filePath = res.tempFilePath;
        wx.openDocument({
          filePath: filePath,
          success: () => {
            console.log("打开成功")
          }
        })
      }
    })
  },
  obtainAddress() {
    wx.chooseAddress({
      success(res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
  },
  callPhone() {
    wx.makePhoneCall({
      phoneNumber: '18722506208',
    })
  }
})