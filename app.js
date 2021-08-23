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
   
   this.overShare()
  },
  
  overShare: function () {
    //监听路由切换
    wx.onAppRoute(function (res) {
      let pages = getCurrentPages(),
        view = pages[pages.length - 1]
        if (view) {
          wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          })
        }
    })
  },

  
})
