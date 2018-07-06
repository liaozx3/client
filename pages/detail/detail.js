const api = require('../../utils/util.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    systemInfo: {},
    item: {
      itemId: 0, name: '烧烤2天', pic: "/image/activity_1.jpeg", slogan: "鬼才去", price: 300, time: "2018", place: "大学城", description: "描述", notice: "注意"
    },
    seller: {
      name:"名字", telephone: 123456
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    app.getSystemInfo(function (res) {
      that.setData({
        systemInfo: res,
      })
    })
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
  summitOrder(e) {
    /*
    api.postRequest()
     */
    wx.switchTab({
      url: "/pages/mine/mine"
    })
  }
})