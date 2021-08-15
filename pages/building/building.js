// pages/building/building.js

import {Arch} from '../../model/arch'

const archApi = new Arch()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    archId:0,
    picture:"",
    building_name:"",
    intro_text:"",
    intro_rate:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that= this;
    // 加载页面数据（封面等
    that.setData({
      picture:"../../static/image/index/cover.png",
      building_name:"炜华体育场",
      intro_text:"伟华体育场是仙林校区最活跃的体育运动场，位于教学楼旁侧，是举办大型校内活动的专属地点"
    })

    let archId = options.archId;
    console.log("building-archId: " + archId);
    that.setData({
      archId:archId
    })
    
    archApi.getBuildingDetail({archId:archId}).then(res =>{
      that.setData({
        picture:res.data.pictures[0],
        intro_text:res.data.des,
        building_name:res.data.name
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

  onBindReviewTap: function () {
    wx.navigateTo({

      url: '../review/review?archId=' + this.data.archId,
       
      })
  },

  onBindConversationTap: function () {
    wx.navigateTo({
   
      url: '../conversation/conversation',
       
      })
  }
})