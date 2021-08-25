// pages/conversation/conversation.js


// 接口TODO：
// 点赞/取消点赞
// 评论
// 获取用户名头像

import {Arch} from '../../model/arch'

const archApi = new Arch()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    archId:0, // 可以跳转页面的时候作为参数
    comments:[],
    value:"",
    picture:"",
    foldStat: true,
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;

    let archId = options.archId;

    console.log("conversation-archId: " + archId);
    that.setData({
      archId:archId
    })


    archApi.getBuildingDetail({archId:archId}).then(res =>{
      var comments=res.data.comments;
      comments.forEach((comment)=>{
        //转换时间戳
        comment.createT = (new Date(comment.createT)).toLocaleDateString().replace(/\//g, "-") + " " + (new Date(comment.createT)).toTimeString().substr(0, 8);
        console.log(comment)
      });

      
      that.setData({
        comments:res.data.comments
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

  /* 返回按钮 */
  onBindBackTap: function () {
    wx.navigateBack({
      delta: 1,
    })
  },


  onReadMore(e){
    console.log(e.currentTarget.dataset.index)
    var that = this;
    that.setData({
      foldStat: !that.data.foldStat
    })
  },

/**
 * 实现点赞帖子
 * @param {*} e 
 */
  onLikeTap(e){
    var that = this;
    var commentId_index = e.currentTarget.dataset.index;
    for(var i = 0 ; i<that.data.comments.length;++i) {
      if(that.data.comments[i].commentId == commentId_index) {
       var likeNum_index = that.data.comments[i].likeNum+1;
       var index = "comments[" + i + "].likeNum";
       that.setData({
         [index]:likeNum_index
       })
       //console.log(that.data.comments[i].likeNum)
      }  
    }
   // todo 更新后端数据
},


/**
 * 展示子评论
 * @param {*} e 
 */
  onShowChildren(e){
    var that = this;
    var commentId_index = e.currentTarget.dataset.index;
    for(var i = 0 ; i<that.data.comments.length;++i) {
      if(that.data.comments[i].commentId == commentId_index) {
       var showChildren = that.data.comments[i].showChild;
       if(showChildren)
       {
         showChildren = false
       }
       else
       {
         showChildren = true
       }
       console.log(showChildren)
       var index = "comments[" + i + "].showChild";
       that.setData({
         [index]:showChildren,
         value:""
       })
       //console.log(that.data.comments[i].)
      }  
    }
  },

  /**
   * 输入评论
   * @param {*} event 
   */
  onChange(event) {
    //console.log(event.detail);
    var that = this;
    that.setData({
      value:event.detail
    })
  },

/**
 * 发布评论
 * @param {*} e 
 */
  onPostTap(e){
    var that = this;
    var commentId_index = e.currentTarget.dataset.index;
    console.log(commentId_index)
    var content = that.data.value;
    var archId = that.data.archId;
    var picture = that.data.picture;
    //todo 提交评论至后端
  }
})