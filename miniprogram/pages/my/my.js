// miniprogram/pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setStorageSync('token','a7b45ad346bd01b1ad9798751f3ac59ff5256936e24d8d6fb42c78b8f9ad08a51f8aa76d62977d71bd3cb520800c7e700e9020e2878342c20c5e6139c6b89af7');
    var link = 'http://localhost:8080/api/user/index';
    var myToken = wx.getStorageSync('token');
<<<<<<< Updated upstream
    myToken = JSON.parse(String(myToken));
=======
    console.log("1:"+myToken)
    myToken = JSON.parse(myToken);
>>>>>>> Stashed changes
    var that  = this;
    console.log("2:"+myToken)
    wx.request({
      url: link,
      header: {
        'Authorization':myToken,
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(myToken)
        console.log(res.data)
        wx.setStorageSync('user',res.data);
        //正式开发环境从此开始：
        that.setData({
          user: wx.getStorageSync('user')
        })
      },
      fail(){
        console.log("fail");
      }
    })
  },
  show:function(){
    console.log(this.data.user);
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

  }
})