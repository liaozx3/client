const api = require('../../utils/util.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      itemId: 0, name: 'item0', pic: "/image/activity_1.jpeg", price: 300, place: "大学城", state: "进行中"
    },
    seller: {

    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options === null || options.itemId === null) {
      return
    } else {
      /*api.get(`${options.itemId}`)
        .then(res => {
          that.setData({
            item: res.data.item
          })
        })*/
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
  
  },
  summitOrder(e) {

    wx.switchTab({
      url: "/pages/mine/mine"
    })
  }
})