// pages/conversation/conversation.js


// 接口TODO：
// 折叠
// 评论

const app=getApp()
import {Arch} from '../../model/arch'
const archApi = new Arch()
import {User} from '../../model/user'
const userApi = new User()
import {Comment} from '../../model/comment'
const commentApi = new Comment()

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
      // 把所有评论的折叠状态都设为true
      comments.forEach((comment)=>
      {
        comment.foldStat=true;
      })


      comments.forEach((comment)=>{
        console.log(comment)
        //转换时间戳
        comment.createT = (new Date(comment.createT)).toLocaleDateString().replace(/\//g, "-") + " " + (new Date(comment.createT)).toTimeString().substr(0, 8);
        //通过用户id获取头像
        userApi.getUserData({userId:comment.userId}).then(rs =>{
          // console.log(rs.data)
          comment.userAvatar=rs.data.avatar;
          comment.userName=rs.data.name;
          that.setData({
            comments:res.data.comments
          })
        })
        //通过用户id得知是否点赞过这条评论
        userApi.getIsLiked({userId:app.globalData.userId,commentId:comment.commentId}).then(rs=>{
          comment.isLike=rs.data.isLike;
          console.log(comment)
          that.setData({
            comments:res.data.comments
          })
        }
        )
        // console.log(comment)
      });

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
    // console.log(e.currentTarget.dataset.index)
    var that = this;
    var commentId_index = e.currentTarget.dataset.index;
    for(var i = 0 ; i<that.data.comments.length;++i) {
      if(that.data.comments[i].commentId == commentId_index) {
        var comment_index=i;
        var origin=that.data.comments[comment_index].foldStat
        var foldIndex = "comments[" + comment_index + "].foldStat";
        that.setData({
          [foldIndex]:!origin
        })
      }
    }
  },

/**
 * 实现点赞帖子
 * @param {*} e 
 */
  onLikeTap(e){
    var that = this;
    var commentId_index = e.currentTarget.dataset.index;
    // console.log(commentId_index)

    for(var i = 0 ; i<that.data.comments.length;i++) {
      if(that.data.comments[i].commentId == commentId_index) {
      var commnet_index=i;
      // 如果是这条评论
      // 首先给后端发送请求，后端自己判断是点赞还是取消点赞
       commentApi.likeComment({commentId:commentId_index,userId:app.globalData.userId}).then(rs =>{
         console.log(rs)

         var likeNum_index;
         var isLike_index;
        //  console.log(commnet_index)
         console.log(that.data.comments[commnet_index])
         if(that.data.comments[commnet_index].isLike==false)
         {
          likeNum_index=that.data.comments[commnet_index].likeNum+1;
          isLike_index=true
           // 展示点赞成功
          wx.showToast({
            title: "点赞成功", // 提示的内容
            icon: "success", // 图标，默认success
            image: "", // 自定义图标的本地路径，image 的优先级高于 icon
            duration: 1500, // 提示的延迟时间，默认1500
            mask: false, // 是否显示透明蒙层，防止触摸穿透
        })
         }
         else
         {
          likeNum_index=that.data.comments[commnet_index].likeNum-1;
          // 展示取消点赞
          isLike_index=false
         }
         var numIndex = "comments[" + commnet_index + "].likeNum";
         var likeIndex =  "comments[" + commnet_index + "].isLike";
         that.setData({
           [numIndex]:likeNum_index,
           [likeIndex]:isLike_index
         })
        //  console.log(that.data.comments[commnet_index].likeNum)

       })

     
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