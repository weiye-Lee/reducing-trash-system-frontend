// miniprogram/pages/farmerAddManage/farmerAddManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   name:'',
   tele:'',
   address:''
  },
  //跳转页面
  gotoAppointment(){
    wx.navigateTo({
      url: '../farmerAppointment/farmerAppointment?name='+this.data.name+'&tele='+this.data.tele+'&address='+this.data.address,
    })

  },
  // 表单值改变
  onNameChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      name: event.detail
    })
  },
  onTeleChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      tele: event.detail
    })
  },
  onAddressChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      address: event.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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