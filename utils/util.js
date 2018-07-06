const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const host = 'localhost:9999'

function getRequest(url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host+url,
      method: "GET",
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}

function postRequest(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: "POST",
      data: data,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("success")
        resolve(res)
      },
      fail: function (res) {
        console.log("failed")
        reject(res)
      }
    })
  })
}

module.exports = {
  formatTime: formatTime,
  getRequest: getRequest,
  postRequest: postRequest,
}
