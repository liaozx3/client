//index.js
//获取应用实例
const api = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    systemInfo: {},
    tabName: ['精选', '潮玩', '情侣约会', '亲子体验'],
    itemContainerList: [
      { list: [
        { itemId: 0, name: 'item0', pic: "/image/activity_1.jpeg", price: 300, place: "大学城", state: "进行中"},
        { itemId: 1, name: 'item1', pic: "/image/activity_1.jpeg", price: 300,  },
      ]}, 
      { list: [
        { itemId: 0, name: 'item2', pic: "/image/activity_1.jpeg", price: 300,  },
        { itemId: 1, name: 'item3', pic: "/image/activity_1.jpeg", price: 300,  },
      ]}, 
      { list: [
        { itemId: 0, name: 'item4', pic: "/image/activity_1.jpeg", price: 300,  },
        { itemId: 1, name: 'item5', pic: "/image/activity_1.jpeg", price: 300,  },
      ]}, 
      { list: [
        { itemId: 0, name: 'item6', pic: "/image/activity_1.jpeg", price: 300,  },
        { itemId: 1, name: 'item7', pic: "/image/activity_1.jpeg", price: 300,  },
      ]}
    ],
    currentTab: 0,
    
  },
  onLoad: function () {
    var that = this
    app.getSystemInfo(function (res) {
      that.setData({
        systemInfo: res,
      })
    })
  },
  // 切换 tab
  switchTab(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  // 滑动 tab
  slideTab(e) {
    this.setData({
      currentTab: e.detail.current
    })
  },
  // 点击跳转详情页
  onItemClick(e) {
    var targetUrl = "/pages/detail/detail"
    if (e.currentTarget.dataset.itemId != null)
      targetUrl = targetUrl + '?itemId=' + e.currentTarget.dataset.itemId
    wx.navigateTo({
      url: targetUrl
    })
  },
})
