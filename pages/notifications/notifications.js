// pages/notifications/notifications.js

import {Notice} from '../../model/notice'

const noticeApi = new Notice()

const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {

    notification_list:[],
    show:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that= this;
    // 接收来自后端的数据
      noticeApi.getNotices({userId:app.globalData.userInfo.userId}).then(res=>
        {
          that.setData(
            {
              notification_list:res.data
            }
          )
        })
      
      // that.setData({
      //   notification_list:[
      //     {
      //       noticeId: 0,
      //       senderId: 1,
      //       content:"test0test0test0test0test0test0test0test0test0"
      //     },
      //     {
      //       noticeId: 1,
      //       senderId: 101,
      //       content:"test1test1test1test1test1test1",
      //       senderAvatar:"../../static/image/index/cover.png",
      //       senderName:"小明"
      //     }
      //   ]
      // })
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


  /**
   * 返回上一级页面
   */
  onBindBackTap(){

    wx.navigateTo({
      url: '../user/user',
    })

  },


  /**
   * 清空通知列表动画效果
   */
  onBindDeleteTap(){

    var that = this;
    that.setData({
      show:false,
    })
   
  },
/**
 * 清空通知列表后续接口操作
 */
  onBindUpdataTap(){

     // 将通知都标注为已读
    var readArray=this.data.notification_list;
    var length=readArray.length;

    
    for (let i = 0; i < length; i++)
    {
      // console.log(readArray[i])
      noticeApi.readNotices({noticeId:readArray[i].noticeId})
    }

    var arr = []
    this.setData({
      notification_list:arr
    })
    console.log(this.data.notification_list)

  },
  /**
   * 删除单个通知
   * @param {*} e 
   */
  onDeleteNotice(e){
    var index = e.currentTarget.dataset.index;
   console.log(e.currentTarget.dataset.index)
   var arr = []
   this.data.notification_list.filter((item, noticeId) => {
     if (index != noticeId) {
       arr.push(item)
     }
   })
   this.setData({
     notification_list: arr
   })
   console.log(this.data.notification_list)
   // 或许需要更新后端数据库
   noticeApi.readNotices({noticeId:index})

  }

  
})