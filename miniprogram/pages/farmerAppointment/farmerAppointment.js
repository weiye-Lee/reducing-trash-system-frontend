// miniprogram/pages/farmerAppointment/farmerAppointment.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remark: '',
    name: '',
    tele: '',
    address: '',
    reGarbageChooses:[],
    reScore:''
  },
  gotoFarmerAddressManage() {
    wx.navigateTo({
      url: '../farmerAddressManage/farmerAddressManage',
    })
  },
  gotoFarmerRecycle(){
    wx.navigateTo({
      url: '../farmerRecycle/farmerRecycle',
    })
  },
  submit(){
    console.log(this.data.reGarbageChooses);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: app.globalData.fname,
      tele: app.globalData.ftele,
      address: app.globalData.faddress,
      reGarbageChooses: app.globalData.reGarbageChooses,
      reScore: app.globalData.reScore,
      remark: app.globalData.remark
    })
    // if(options.name!=null){
    //   this.setData({
    //     name: options.name,
    //     tele: options.tele,
    //     address: options.address
    //   })
    //   app.globalData.name=options.name,
    //   app.globalData.tele=options.tele,
    //   app.globalData.address=options.address
    // }
    if(options.reGarbageChooses!=null){
      var list =JSON.parse(options.reGarbageChooses)
      console.log(list);
      this.setData({
        reGarbageChooses:list,
        reScore:options.reScore
      })
      app.globalData.reGarbageChooses=list,
      app.globalData. reScore=options.reScore
    }
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