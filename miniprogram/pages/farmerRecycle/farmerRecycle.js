// miniprogram/pages/farmerRecycle/farmerRecycle.js
import Notify from '@vant/weapp/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    currentTab:0,
    image:"home0.png",
    recycleGarbage:{
      paper:[
        {
          id:1,
          name:"纸壳、硬纸板",
          unit:"斤",
          picture:null,
          score:25
        },
        {
          id:2,
          name:"废旧资料、旧报纸",
          unit:"斤",
          picture:null,
          score:60
        }
      ],
      plastic:[
        {
          id:3,
          name:"废旧塑料制品",
          unit:"斤",
          picture:null,
          score:5
        },
        {
          id:4,
          name:"饮料瓶",
          unit:"个",
          picture:null,
          score:7
        }
      ]
    }
  },
  
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    console.log(id);
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