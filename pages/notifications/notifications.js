// pages/notifications/notifications.js

import {Notice} from '../../model/notice'
import {User} from '../../model/user'

const userApi = new User()

const noticeApi = new Notice()

const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    temp_list:[],
    notification_list:[],
    show:true,
    userId:0
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that= this;
    // 接收来自后端的数据

    wx.getStorage({
      key: 'userId',
      success: function(res) {
        that.setData(
          {
            userId:res.data
          }
        )
      },
    })

      noticeApi.getNotices({userId:that.data.userId}).then(res=>
        {
          // res.data是所有的消息
          console.log(res)
          if(res.data.length==0)
          {
            console.log("isempty")
            res.data=
            [
                  {
                    noticeId: -1,
                    senderId: 1,
                    isUnread: true,
                    content:"你暂时还没有收到任何消息哦"
                  }
                ]
          }
          // 需要筛选出未读信息
          var unReadNotices=[]
          res.data.forEach((p)=>
          {
            if(p.isUnread==true)
              {
               // 未读消息
               if(p.senderId!=1)
               {
              // 需要确定senderName和senderAvatar
              userApi.getUserData({userId:p.senderId}).then(rs=>
                {
                  p.senderName=rs.data.name;
                  p.senderAvatar=rs.data.avatar;
                  
                  that.setData(
                    {
                      notification_list:unReadNotices
                    }
                  )
                },
                )

              }
              unReadNotices.push(p)
              that.setData(
                {
                  notification_list:unReadNotices
                }
              )
              }
            
          })
        


        })
      
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

    wx.navigateBack({
      delta: 1,
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
  var that=this;
  // console.log(e.currentTarget.dataset)
  var index = e.currentTarget.dataset.index;
   console.log(e.currentTarget.dataset.index)
   var arr = []

   that.data.notification_list.forEach((p)=>
   {
     if(p.noticeId!=index)
     {
       arr.push(p)
     }
   }  
   )
   this.setData({
    notification_list: arr
  })
   
   // 更新已读
   noticeApi.readNotices({noticeId:index})

   console.log(this.data.notification_list)
  }

  
})