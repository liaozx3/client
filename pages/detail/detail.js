const api = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    index: null,
    imgUrl: [
      'http://118.89.35.145:9991/public/pic1.jpg', 'http://118.89.35.145:9991/public/pic2.jpg',
      'http://118.89.35.145:9991/public/pic3.jpg', 'http://118.89.35.145:9991/public/pic4.jpg',
      'http://118.89.35.145:9991/public/pic5.jpg', 'http://118.89.35.145:9991/public/pic6.jpg',
    ],
    systemInfo: {},
    item: {},
    seller: {},
    order: {},
  },

  onLoad: function (options) {
    var that = this
    that.setData({
      index: options.Index,
    })
    app.getSystemInfo(function (res) {
      that.setData({
        systemInfo: res,
      })
    })
    if (options === null || options.Id === null) {
      return
    } else {
      api.getRequest('activity/' + options.Id)
        .then(res => {
          var sellerId = res.data.Data.SellerId
          that.setData({
            item: res.data.Data
          })
          api.getRequest('seller/' + sellerId)
            .then(res => {
              that.setData({
                seller: res.data.Data
              })
            })
        })
    }
  },
  summitOrder(e) {
    console.log(app.globalData.userId)
    if (app.globalData.userId) {
      this.data.order.UserId = app.globalData.userId
      this.data.order.SellerId = this.data.item.SellerId
      this.data.order.State = 0
      this.data.order.Code = api.MathRand()
      this.data.order.Time = this.data.item.Time
      this.data.order.Place = this.data.item.Place
      api.postRequest('order/', this.data.order)
    }
    wx.switchTab({
      url: "/pages/mine/mine"
    })
  }
})