// app.js
App({
  globalData: {
    userInfo: null,
    userId:0
  },
  
  onLaunch() {
    var that=this;
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
   
  }

  
})
