//app.js
App({
  onLaunch: function () {
    // 通过获取token有无判断登录状态
    wx.getStorage({
      key: 'token',
      success(res) {
        console.log("登录成功")
        console.log(res)
      },
      fail(res) {
        console.log("登录过期，请重新登录")
      }
    })
  },
  globalData: {
    userInfo: null,
    token: "",
    remark: '',
    fname: '',
    ftele: '',
    faddress: '',
    reGarbageChooses: [],
    reScore: ''
  }
})