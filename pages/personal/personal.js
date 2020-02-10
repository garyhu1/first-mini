Page({
  data:{
    isShow: false
  },

  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  },

  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh();
    },2000);
  },

  onPageScroll(res) {
    // console.log("开始滚动 = "+res.scrollTop);
    if (res.scrollTop > 130) {
      this.setData({
        isShow: true
      });
    }else {
      if(this.data.isShow){
        // console.log("开始隐藏");
        this.setData({
          isShow: false
        });
      }
    }
  }
});