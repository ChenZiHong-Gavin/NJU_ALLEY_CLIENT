// pages/user/user.js


const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
   data: {
    userInfo:null,
    showRight: false,
    showShareTip: false,
    showShare: false,
    options: [
      [
        { name: '微信', icon: 'wechat' },
        { name: '复制链接', icon: 'link' },
      ]
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
     
    wx.navigateBack({
      delta: 1,
    })
  },

  // 点击分享
  onShareClick(event) {
    this.setData({ showShare: true });
  },

  // 关闭分享面板
  onShareClose(event) {
    this.setData({ showShare: false });
  },

  // 分享面板中的按钮
  onShareSelect(event) {
    this.Toast(event.detail.name);
    this.setData({ showShareTip: true });
  },

  Toast(name)
  {
    if(name=='微信'||'复制链接')
    {
      // 打开提示遮罩层
      this.onShareClose();
    }
  },

  // 关闭遮罩层
  onClickShareHide()
  {
    this.setData(
      {
        showShareTip: false
      }
    )
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