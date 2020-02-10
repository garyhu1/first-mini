Page({
  data: {
    ctx: null
  },
  canvasIdErrorCallback(e) {
    console.error(e.detail.errMsg)
  },
  onReady(e) {
    // 使用 wx.createContext 获取绘图上下文 context
    const context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle('#00ff00')
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle('#ff0000')
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  },
  drawGradient() {
    if (this.ctx === undefined){
      this.ctx = wx.createCanvasContext("d-ca", this)
    }

    var grd = this.ctx.createLinearGradient(0,0,300,0);

    grd.addColorStop(0, 'red')
    grd.addColorStop(0.16, 'orange')
    grd.addColorStop(0.33, 'yellow')
    grd.addColorStop(0.5, 'green')
    grd.addColorStop(0.66, 'cyan')
    grd.addColorStop(0.83, 'blue')
    grd.addColorStop(1, 'purple')

    this.ctx.setFillStyle(grd);
    this.ctx.fillRect(10,10,200,100);
    this.ctx.draw();
  },
  drawPattern() {
    if (this.ctx === undefined) {
      this.ctx = wx.createCanvasContext("d-ca", this)
    }

    this.ctx.clearRect(0,0,300,300);

    let pattern = this.ctx.createPattern('../../images/location.png', 'repeat-x');
    this.ctx.setFillStyle(pattern);
    this.ctx.fillRect(0, 10, 300, 30);

    this.ctx.draw();
  },
  drawImage() {
    if (this.ctx === undefined) {
      this.ctx = wx.createCanvasContext("d-ca", this)
    }

    let cc = this.ctx;

    wx.chooseImage({
      success: function(res) {
        cc.drawImage(res.tempFilePaths[0],0,0,150,80);

        cc.setFontSize(20);
        cc.fillStyle = "red";
        cc.fillText("Hello World!",0,100);

        cc.draw(false,() => {
          console.log("绘制完成");
        })
      },
    })
  },
  drawShadow() {
    if (this.ctx === undefined) {
      this.ctx = wx.createCanvasContext("d-ca", this)
    }

    this.ctx.setFillStyle('red')
    this.ctx.setShadow(0, 0, 10, '#111111')
    this.ctx.fillRect(10, 10, 150, 75)
    this.ctx.draw(false)
  }
});