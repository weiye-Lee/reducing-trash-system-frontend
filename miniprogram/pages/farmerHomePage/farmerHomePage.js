// miniprogram/pages/farmerHomePage/farmerHomePage.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null,
    garbageChooses:[],
  },
  gotoFarmerAppoint: function () {
    wx.navigateTo({
      url: '../farmerAppointment/farmerAppointment',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var link = 'http://localhost:8080/api/user/index';
    var Token = wx.getStorageSync('token');
    // console.log("1:"+Token)
    //JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。
    var myToken = JSON.parse(String(Token));
    // console.log("2:"+myToken)
    wx.request({
      url: link,
      header: {
        'Authorization': myToken,
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(myToken)
        // console.log(res.data)
        wx.setStorageSync('user', res.data);
        //正式开发环境从此开始：
        that.setData({
          user: wx.getStorageSync('user')
        })
      },
      fail() {
        console.log("fail");
      }
    })
    /**
     * 加载垃圾列表
     */
    var link = 'http://localhost:8080/api/user/getRecycleGarbage';
    var link2 = 'http://localhost:8080/api/user/getUnRecycleGarbage';
    var link3 = 'http://localhost:8080/api/user/getSoilGarbage';
    var Token = wx.getStorageSync('token');
    var myToken = JSON.parse(String(Token));
    //请求可回垃圾
    wx.request({
      url: link,
      header: {
        'Authorization': myToken,
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        //正式开发环境从此开始：
        app.globalData.recycleGarbage = res.data.data.recycleGarbage
        // that.setData({
        //   recycleGarbage: res.data.data.recycleGarbage
        // })
        var t = res.data.data.recycleGarbage;
        console.log(t);
        var a = res.data.data.recycleGarbage.plastic.length;
        var b = res.data.data.recycleGarbage.glass.length;
        var c = res.data.data.recycleGarbage.paper.length;
        var d = res.data.data.recycleGarbage.metal.length;
        var e = res.data.data.recycleGarbage.weave.length;
        var garbageNum = a + b + c + d + e;
        console.log(garbageNum);
        //制造订单数组
        for (var i = 0; i < a; i++) {
          var id = t.plastic[i].id;
          var index = "garbageChooses[" + id + "].garbage";
          var index2 = "garbageChooses[" + id + "].amount";
          var index3 = "garbageChooses[" + id + "].type";
          that.setData({
            [index]: t.plastic[i],
            [index2]: 0,
            [index3]:'recycle',
          })
        }
        for (var i = 0; i < b; i++) {
          var id = t.glass[i].id;
          var index = "garbageChooses[" + id + "].garbage";
          var index2 = "garbageChooses[" + id + "].amount";
          var index3 = "garbageChooses[" + id + "].type";
          that.setData({
            [index]: t.glass[i],
            [index2]: 0,
            [index3]:'recycle',
          })
        }
        for (var i = 0; i < c; i++) {
          var id = t.paper[i].id;
          var index = "garbageChooses[" + id + "].garbage";
          var index2 = "garbageChooses[" + id + "].amount";
          var index3 = "garbageChooses[" + id + "].type";
          that.setData({
            [index]: t.paper[i],
            [index2]: 0,
            [index3]:'recycle',
          })
        }
        for (var i = 0; i < d; i++) {
          var id = t.metal[i].id;
          var index = "garbageChooses[" + id + "].garbage";
          var index2 = "garbageChooses[" + id + "].amount";
          var index3 = "garbageChooses[" + id + "].type";
          that.setData({
            [index]: t.metal[i],
            [index2]: 0,
            [index3]:'recycle',
          })
        }
        for (var i = 0; i < e; i++) {
          var id = t.weave[i].id;
          var index = "garbageChooses[" + id + "].garbage";
          var index2 = "garbageChooses[" + id + "].amount";
          var index3 = "garbageChooses[" + id + "].type";
          that.setData({
            [index]: t.weave[i],
            [index2]: 0,
            [index3]:'recycle',
          })
        }
        app.globalData.garbageChooses = that.data.garbageChooses;
      },
      fail() {
        console.log("fail");
      }
    }) 
    //请求不可回垃圾
    wx.request({
      url: link2,
      header: {
        'Authorization': myToken,
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        //正式开发环境从此开始：
        app.globalData.unRecycleGarbage = res.data.data.unRecycleGarbage
        // that.setData({
        //   recycleGarbage: res.data.data.recycleGarbage
        // })
        var t = res.data.data.unRecycleGarbage;
        console.log(t);
        var a = t.metal.length;
        var b = t.pesticide.length;
        //制造订单数组
        
        for (var i = 0; i < a; i++) {
          var id = t.metal[i].id;
          var index = "garbageChooses[" + id + "].garbage";
          var index2 = "garbageChooses[" + id + "].amount";
          var index3 = "garbageChooses[" + id + "].type";
          that.setData({
            [index]: t.metal[i],
            [index2]: 0,
            [index3]:'unRecycle',
          })
        }
        for (var i = 0; i < b; i++) {
          var id = t.pesticide[i].id;
          var index = "garbageChooses[" + id + "].garbage";
          var index2 = "garbageChooses[" + id + "].amount";
          var index3 = "garbageChooses[" + id + "].type";
          that.setData({
            [index]: t.pesticide[i],
            [index2]: 0,
            [index3]:'unRecycle',
          })
        }
        app.globalData.garbageChooses = that.data.garbageChooses;
        // console.log(that.data.unReGarbageChooses);
      },
      fail() {
        console.log("fail");
      }
    })
     //请求就地回收垃圾煤渣
     wx.request({
      url: link3,
      header: {
        'Authorization': myToken,
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        //正式开发环境从此开始：
        app.globalData.soil = res.data.data.soil
        // that.setData({
        //   recycleGarbage: res.data.data.recycleGarbage
        // })
        var t = res.data.data.soil;
        console.log(t);
        var a = t.soil.length;
        //制造订单数组
        for (var i = 0; i < a; i++) {
          var id = t.soil[i].id;
          var index = "garbageChooses[" + id + "].garbage";
          var index2 = "garbageChooses[" + id + "].amount";
          var index3 = "garbageChooses[" + id + "].type";
          that.setData({
            [index]: t.soil[i],
            [index2]: 0,
            [index3]:'soil',
          })
        }
        app.globalData.garbageChooses = that.data.garbageChooses;
        console.log(that.data.garbageChooses);
      },
      fail() {
        console.log("fail");
      }
    })


    //
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