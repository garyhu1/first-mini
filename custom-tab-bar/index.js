Component({
  data: {
    selected: 0,
    color: "#707070",
    selectedColor: "#D81e06",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/images/main.png",
      selectedIconPath: "/images/selected_main.png",
      text: "首页"
    }, {
      pagePath: "/pages/test/test",
      iconPath: "/images/test.png",
      selectedIconPath: "/images/selected_test.png",
      text: "测试"
    },{
        pagePath: "/pages/study/study",
        iconPath: "/images/study.png",
        selectedIconPath: "/images/selected_study.png",
        text: "学习"
    },{
        pagePath: "/pages/personal/personal",
        iconPath: "/images/me.png",
        selectedIconPath: "/images/selected_me.png",
        text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})