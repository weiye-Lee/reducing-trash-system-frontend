// miniprogram/pages/farmerHomePage/farmerHomePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gotoFarmerAppoint:function(){
wx.navigateTo({
  url: '../farmerAppointment/farmerAppointment',
})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('token','            96a45160cb1db954294ecc22baba66cc8c2e1bac3023c735ae00877c5b3de0855ca53402b3284a1690309f8c369f1c5e596165042e390f0964ddb2cb3435fb21 ');
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