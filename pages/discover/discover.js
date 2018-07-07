const api = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    systemInfo: {},
    tabName: ['全部', '潮玩', '情侣约会', '亲子体验'],
    currentTab: 0,
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/maker.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/maker.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
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
