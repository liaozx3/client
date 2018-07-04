//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    systemInfo: {},
    tabName: ['精选', '潮玩', '情侣约会', '亲子体验'],
    currentTab: 0,
    specialList: [],
    playList: [],
    datingList: [],
    familyList: []
  },
  onLoad: function () {
    var that = this
    app.getSystemInfo(function (res) {
      that.setData({
        systemInfo: res,
        specialList: [
          { itemId: 0, name: 'item0', pic: "/image/activity_1.jpeg" },
          { itemId: 1, name: 'item1', pic: "/image/activity_1.jpeg" },
        ],
        playList: [
          { itemId: 0, name: 'item0', pic: "/image/activity_1.jpeg" },
          { itemId: 1, name: 'item1', pic: "/image/activity_1.jpeg" },
        ],
        datingList: [
          { itemId: 0, name: 'item0', pic: "/image/activity_1.jpeg" },
          { itemId: 1, name: 'item1', pic: "/image/activity_1.jpeg" },
        ],
        familyList: [
          { itemId: 0, name: 'item0', pic: "/image/activity_1.jpeg" },
          { itemId: 1, name: 'item1', pic: "/image/activity_1.jpeg" },
        ],
      })
    })
  },
  // 切换 tab
  switchTab(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
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
