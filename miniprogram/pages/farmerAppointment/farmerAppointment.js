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
    garbageChooses:[],
    baseOrder:{
      name:'',
      phoneNumber:'',
      address:'',
      remark:'',
      garbageChooses:'',
    }
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
  gotoFarmerUnRecycle(){
    wx.navigateTo({
      url: '../farmerUnRecycle/farmerUnRecycle',
    })
  },
  gotoFarmerSoil(){
    wx.navigateTo({
      url: '../farmerSoil/farmerSoil',
    })
  },
  onRemarkChange(event){
    this.setData({
      remark:event.detail
    })
  },
  submit(){
    var t =  this.data.garbageChooses;
    console.log(this.data.garbageChooses);
    var newGarbageChooses = new Array();
    for(var i=0;i<t.length;i++){
      if(t[i]!=null&&t[i].amount!=0){
        delete t[i].type;
        delete t[i].garbage.category;
        delete t[i].garbage.name;
        delete t[i].garbage.score;
        delete t[i].garbage.type;
        delete t[i].garbage.unit;
        newGarbageChooses.push(t[i]);
      }
    }
    console.log(newGarbageChooses);
    var myBaseOrder ={
      name:this.data.name,
      phoneNumber:this.data.tele,
      address:this.data.address,
      remark:this.data.remark,
      garbageChooses:newGarbageChooses,
    }
    console.log(myBaseOrder);
    var link = 'http://localhost:8080/api/farmer/addFCOrder';
    var Token = wx.getStorageSync('token');
     //JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。
     var myToken = "139c2fbebadbd5a7d23baa1933854de84a3516e2c3b6cd8923ae7d40d1da3208807c992e36c3c75f447151d4270b7612"

    var data = JSON.stringify(myBaseOrder);
     wx.request({
       url: link,
      method: 'POST',
       data:data,
       header: {
        'Authorization':myToken,
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res.data)
      }

     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: app.globalData.fname,
      tele: app.globalData.ftele,
      address: app.globalData.faddress,
      garbageChooses:app.globalData.garbageChooses,
      remark: app.globalData.remark,
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
    // if(options.reGarbageChooses!=null){
    //   var list =JSON.parse(options.reGarbageChooses)
    //   console.log(list);
    //   this.setData({
    //     reGarbageChooses:list,
    //     reScore:options.reScore
    //   })
    //   app.globalData.reGarbageChooses=list,
    //   app.globalData. reScore=options.reScore
    // }
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