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

const host = 'http://118.89.35.145:9991/api/'

function getRequest(url) {
  console.log(host + url)
  return new Promise((resolve, reject) => {
    wx.request({
      url: host+url,
      method: "GET",
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log('get succeed')
        resolve(res)
      },
      fail: function (res) {
        console.log('get succeed')
        reject(res)
      }
    })
  })
}

function postRequest(url, data) {
  console.log(JSON.stringify(data))
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url,
      method: "POST",
      dataType: "JSON",
      header: { "content-type": "application/x-www-form-urlencoded" },
      data: JSON.stringify(data),
      success: function (res) {
        console.log('post succeed')
        resolve(res)
      },
      fail: function (res) {
        console.log('post failed')
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
