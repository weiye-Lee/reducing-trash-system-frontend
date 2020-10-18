// miniprogram/pages/farmerRecycle/farmerRecycle.js
import Notify from '@vant/weapp/notify/notify';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    currentTab: 0,
    score: 0.0,
    image: "home0.png",
    // recycleGarbage:{
    //   paper:[
    //     {
    //       id:1,
    //       name:"纸壳、硬纸板",
    //       unit:"斤",
    //       picture:null,
    //       score:25
    //     },
    //     {
    //       id:2,
    //       name:"废旧资料、旧报纸",
    //       unit:"个",
    //       picture:null,
    //       score:60
    //     }
    //   ],
    //   plastic:[
    //     {
    //       id:3,
    //       name:"废旧塑料制品",
    //       unit:"斤",
    //       picture:null,
    //       score:5
    //     },
    //     {
    //       id:4,
    //       name:"饮料瓶",
    //       unit:"个",
    //       picture:null,
    //       score:7
    //     }
    //   ]
    // },
    recycleGarbage: [],
    garbageChooses: [],
  },
  /**
   * 垃圾数量的改变,以及对应的积分变化
   */
  onUnitChange(event) {
    // console.log(event.detail)
    var that = this;
    var id = event.target.dataset.id;
    var amount = event.target.dataset.name;
    var index = "garbageChooses[" + id + "]." + amount;
    this.setData({
      [index]: parseFloat(event.detail.value)
    })
    var t = that.data.garbageChooses;
    var myScore = 0;
    for (var i = 0; i < t.length; i++) {
      if (t[i] != null) {
        myScore = myScore + ((t[i].amount) * (t[i].garbage.score))
      }
    }
    that.setData({
      score: myScore
    })
  },
  addAmount(event) {
    var that = this;
    var id = event.target.dataset.id;
    var amount = parseFloat(this.data.garbageChooses[id].amount) + 1;
    var index = "garbageChooses[" + id + "].amount";
    this.setData({
      [index]: amount
    })
    var t = that.data.garbageChooses;
    var myScore = 0;
    for (var i = 0; i < t.length; i++) {
      if (t[i] != null) {
        myScore = myScore + ((t[i].amount) * (t[i].garbage.score))
      }
    }
    that.setData({
      score: myScore
    })
  },
  delAmount(event) {
    var that = this;
    var id = event.target.dataset.id;
    var amount = parseFloat(this.data.garbageChooses[id].amount) - 1;
    var index = "garbageChooses[" + id + "].amount";
    this.setData({
      [index]: amount
    })
    var t = that.data.garbageChooses;
    var myScore = 0;
    for (var i = 0; i < t.length; i++) {
      if (t[i] != null) {
        myScore = myScore + ((t[i].amount) * (t[i].garbage.score))
      }
    }
    that.setData({
      score: myScore
    })
  },
  /**
   * 提交订单
   */
  submit() {
    console.log(this.data.garbageChooses);
    app.globalData.garbageChooses = this.data.garbageChooses;
    wx.navigateTo({
      url: '../farmerAppointment/farmerAppointment'
    })  
    // var garbageChooses = JSON.stringify(this.data.garbageChooses);
    // wx.navigateTo({
    //   url: '../farmerAppointment/farmerAppointment?reGarbageChooses=' + garbageChooses + '&reScore=' + this.data.score,
    // })
  },
  /**
   * 导航所用方法（黑盒）
   */
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      active: id
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(app.globalData.garbageChooses);
    this.setData({
      recycleGarbage:app.globalData.recycleGarbage,
      garbageChooses: app.globalData.garbageChooses,
    })
    // var link = 'http://localhost:8080/api/user/getRecycleGarbage';
    // var Token = wx.getStorageSync('token');
    // var myToken = JSON.parse(String(Token));
    // wx.request({
    //   url: link,
    //   header: {
    //     'Authorization': myToken,
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     //正式开发环境从此开始：
    //     that.setData({
    //       recycleGarbage: res.data.data.recycleGarbage
    //     })
    //     var t = res.data.data.recycleGarbage;
    //     console.log(t);
    //     var a = res.data.data.recycleGarbage.plastic.length;
    //     var b = res.data.data.recycleGarbage.glass.length;
    //     var c = res.data.data.recycleGarbage.paper.length;
    //     var d = res.data.data.recycleGarbage.metal.length;
    //     var e = res.data.data.recycleGarbage.weave.length;
    //     var garbageNum = a + b + c + d + e;
    //     console.log(garbageNum);
    //     //制造订单数组
    //     for (var i = 0; i < a; i++) {
    //       var id = t.plastic[i].id;
    //       var index = "garbageChooses[" + id + "].garbage";
    //       var index2 = "garbageChooses[" + id + "].amount";
    //       that.setData({
    //         [index]: t.plastic[i],
    //         [index2]: 0,
    //       })
    //     }
    //     for (var i = 0; i < b; i++) {
    //       var id = t.glass[i].id;
    //       var index = "garbageChooses[" + id + "].garbage";
    //       var index2 = "garbageChooses[" + id + "].amount";
    //       that.setData({
    //         [index]: t.glass[i],
    //         [index2]: 0,
    //       })
    //     }
    //     for (var i = 0; i < c; i++) {
    //       var id = t.paper[i].id;
    //       var index = "garbageChooses[" + id + "].garbage";
    //       var index2 = "garbageChooses[" + id + "].amount";
    //       that.setData({
    //         [index]: t.paper[i],
    //         [index2]: 0,
    //       })
    //     }
    //     for (var i = 0; i < d; i++) {
    //       var id = t.metal[i].id;
    //       var index = "garbageChooses[" + id + "].garbage";
    //       var index2 = "garbageChooses[" + id + "].amount";
    //       that.setData({
    //         [index]: t.metal[i],
    //         [index2]: 0,
    //       })
    //     }
    //     for (var i = 0; i < e; i++) {
    //       var id = t.weave[i].id;
    //       var index = "garbageChooses[" + id + "].garbage";
    //       var index2 = "garbageChooses[" + id + "].amount";
    //       that.setData({
    //         [index]: t.weave[i],
    //         [index2]: 0,
    //       })
    //     }
    //     app.globalData.reGarbageChooses=that.data.garbageChooses;
    //     // console.log(that.data.garbageChooses);
    //   },
    //   fail() {
    //     console.log("fail");
    //   }
    // })




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