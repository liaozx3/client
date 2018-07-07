const app = getApp()
const api = require('../../utils/util.js')

Page({
  data: {
    systemInfo: {},
    userId: null,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabName: ['未完成订单', '已完成订单'],
    currentTab: 1,
    unfinishedOrderList: [],
    orderList: [],
  },
  onLoad: function () {
    var that = this
    app.getSystemInfo(function (res) {
      that.setData({
        systemInfo: res,
      })
    })

    // getUserInfo
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    if (app.globalData.userInfo) {
      // login and get orders
      api.postRequest('user/login', { Name: app.globalData.userInfo.nickName })
      .then(function (res) {
        that.setData({
          userId: JSON.parse(res.data).Data.Id,
        })
      })
      .then(function () {
        app.globalData.userId = that.data.userId
        api.getRequest('order/user/' + that.data.userId)
          .then(function (res) {
            that.setData({
              orderList: res.data.Data,
            })
          })
      })
    }
  },
  onShow: function() {
    var that = this
    api.getRequest('order/user/' + that.data.userId)
      .then(function (res) {
        that.setData({
          orderList: res.data.Data,
        })
      })
  },
  getUserInfo: function (e) {
    var that = this
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    // register and login and get orders
    api.postRequest('user/register', { Name: app.globalData.userInfo.nickName })
      .then(function(res) {
        api.postRequest('user/login', { Name: app.globalData.userInfo.nickName })
          .then(function (res) {
            that.setData({
              userId: JSON.parse(res.data).Data.Id,
            })
          })
          .then(function () {
            app.globalData.userId = that.data.userId
            api.getRequest('order/user/' + that.data.userId)
              .then(function (res) {
                that.setData({
                  orderList: res.data.Data,
                })
              })
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
