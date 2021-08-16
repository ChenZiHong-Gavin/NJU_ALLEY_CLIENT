// pages/review/review.js

import {Arch} from '../../model/arch'

const archApi = new Arch()

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    archId:0,
    value: 0,
    user_name:"",
    building_name:"",
    mark_text_value:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      user_name:"小明",
      building_name:"大活"
    })

    let archId = options.archId;
    console.log("review-archId: " + archId);
    that.setData({
      archId:archId
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

  onChange(event) {
    this.setData({
      value: event.detail,
    });
  },

  /**
   * textarea输入内容绑定
   * @param {*} e 
   */
  onInputMarkText(e){
    this.setData({
      mark_text_value:e.detail.value
    })
  },
  /**
   * 用户提交点评结果
   */
  onSubmitMarkTap(){
     // console.log(this.data.mark_text_value)

     let commentDTO = {
       archId:this.data.archId,
       userId:app.globalData.userId,
       content:this.data.mark_text_value,
       picture:""
     }
     //console.log(commentDTO)
     archApi.commentBuilding(commentDTO);
     archApi.rateBuilding({archId:this.data.archId, score:this.data.value, userId:app.globalData.userId});

     wx.navigateTo({
   
      url: '../review-success/review-success',
       
      })
  
  },

  // 返回空间
  onBindBackTap(){
    wx.navigateTo({
   
      url: '../building/building',
       
      })
  }
})