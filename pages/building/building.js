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
    let archId = options.archId;
    console.log("building-archId: " + archId);
    that.setData({
      archId:archId
    })
    
    archApi.getBuildingDetail({archId:archId}).then(res =>{
      console.log(res)
      that.setData({
        picture:res.data.pictures[0],
        intro_text:res.data.des,
        intro_rate:res.data.score | 0,
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

      url: '../review/review?archId=' + this.data.archId + '&building_name=' + this.data.building_name,

      })
  },

  onBindConversationTap: function () {
    wx.navigateTo({
   
      url: '../conversation/conversation?archId=' + this.data.archId,
       
      })
  },

// 图片点击事件  
clickImg: function(e){
  // console.log(this.data)
  var imgUrl = this.data.picture;
  console.log(imgUrl)
  wx.previewImage({
    urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
    current: '', // 当前显示图片的http链接，默认是第一个
    // 回调函数
    success: function (res) { },
    // 预览失败的时候需要有提示
    fail: function (res) { },
    complete: function (res) { },
  })
},

onBindBackTap: function()
{
  wx.navigateTo({
    url: '../map/map',
  })
}

})