const api = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    systemInfo: {},
    tabName: ['全部', '潮玩', '情侣约会', '亲子体验'],
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
})
