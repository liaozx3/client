//index.js
//获取应用实例
const api = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    systemInfo: {},
    tabName: ['精选', '潮玩', '情侣约会', '亲子体验'],
    specialList: [], 
    playList: [], 
    datingList: [], 
    familyList: [],
    currentTab: 0,
    imgUrl: [
      'http://118.89.35.145:9991/public/pic1.jpg', 'http://118.89.35.145:9991/public/pic2.jpg',
      'http://118.89.35.145:9991/public/pic3.jpg', 'http://118.89.35.145:9991/public/pic4.jpg',
      'http://118.89.35.145:9991/public/pic5.jpg', 'http://118.89.35.145:9991/public/pic6.jpg',
    ]
  },
  onLoad: function () {
    var that = this
    app.getSystemInfo(function (res) {
      that.setData({
        systemInfo: res,
      })
    })
    //获取specialList
    api.getRequest('activity/')
      .then(res => {
        that.setData({
          specialList: res.data.Data,
          datingList: res.data.Data,
          familyList: res.data.Data,
          playList: res.data.Data,
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
    console.log(e)
    var targetUrl = "/pages/detail/detail"
    if (e.currentTarget.id != null)
      targetUrl = targetUrl + "?Id=" + e.currentTarget.id + "&Index=" + e.currentTarget.dataset.index
    wx.navigateTo({
      url: targetUrl
    })
  },
})
