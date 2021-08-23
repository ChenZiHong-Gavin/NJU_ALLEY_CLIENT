// pages/user/user.js


const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
   data: {
    userInfo:null,
    showRight: false,
    showShare: false,
    options: [
      [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    ],
    activeNames: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onBindBackTap: function() {
 
    wx.setStorageSync('welcome',true);
     
    wx.navigateTo({
     
    url: '../map/map',
     
    })
  },
  onShareClick(event) {
    this.setData({ showShare: true });
  },

  onShareClose(event) {
    this.setData({ showShare: false });
  },

  onShareSelect(event) {
    this.Toast(event.detail.name);
    this.onShareClose();
  },

  Toast(name)
  {

  },

  // 前往通知页面
  onBindNotifictionTap: function()
  {
    wx.navigateTo({
     
      url: '../notifications/notifications',
       
      })
  },

  //控制使用条款遮罩层的两个方法
  onClickShow() {
    this.setData({ showRight: true });
  },

  onClickHide() {
    this.setData({ showRight: false });
  },

  noop() {},

  // 折叠面板的方法
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
})