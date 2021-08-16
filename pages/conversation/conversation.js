// pages/conversation/conversation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    archId:0, // 可以跳转页面的时候作为参数
    comment:[
      {
        commentId:0,
        fatherId:-1,
        userId:10,
        userName:'张三',
        userAvatar:"../../static/image/box/box_body.png",
        likeNum:20,
        createT:'2021-8-15',
        content:'test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1',
        picture:'../../static/image/box/box_body.png',
        showChild:true,
        children:[
          {
            commentId:1,
            fatherId:0,
            userId:2,
            userName:'小明',
            userAvatar:"../../static/image/introduce/state1.png",
            likeNum:100,
            createT:'2021-8-15',
            content:'test1.1',
            picture:'../../static/state1.png',
            children:[]
          }
        ]
      },
      {
        commentId:2,
        fatherId:-1,
        userId:12,
        userName:'李四',
        userAvatar:"../../static/state1.png",
        likeNum:50,
        createT:'2021-8-12',
        content:'test2test2test2test2test2test2test2test2test2test2test2test2',
        picture:'-2',
        showChildren:false,
        children:[]
      },
      // {
      //   commentId:3,
      //   fatherId:-1,
      //   userId:12,
      //   userName:'李四',
      //   userAvatar:"../../static/state1.png",
      //   likeNum:50,
      //   createT:'2021-8-12',
      //   content:'test2test2test2test2test2test2test2test2test2test2test2test2',
      //   picture:'-2',
      //   children:[]
      // },
      // {
      //   commentId:4,
      //   fatherId:-1,
      //   userId:10,
      //   userName:'张三',
      //   userAvatar:"../../static/image/box/box_body.png",
      //   likeNum:20,
      //   createT:'2021-8-15',
      //   content:'test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1',
      //   picture:'../../static/image/box/box_body.png',
      //   children:[
      //     {
      //       commentId:5,
      //       fatherId:0,
      //       userId:2,
      //       userName:'小明',
      //       userAvatar:"../../static/image/introduce/state1.png",
      //       likeNum:100,
      //       createT:'2021-8-15',
      //       content:'test1.1',
      //       picture:'../../static/state1.png',
      //       children:[]
      //     }
      //   ]
      // },
      // {
      //   commentId:6,
      //   fatherId:-1,
      //   userId:10,
      //   userName:'张三',
      //   userAvatar:"../../static/image/box/box_body.png",
      //   likeNum:20,
      //   createT:'2021-8-15',
      //   content:'test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1',
      //   picture:'../../static/image/box/box_body.png',
      //   children:[
      //     {
      //       commentId:7,
      //       fatherId:0,
      //       userId:2,
      //       userName:'小明',
      //       userAvatar:"../../static/image/introduce/state1.png",
      //       likeNum:100,
      //       createT:'2021-8-15',
      //       content:'test1.1',
      //       picture:'../../static/state1.png',
      //       children:[]
      //     }
      //   ]
      // },
    ],
    value:"",
    picture:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  onReadMore(e){
    console.log(e.currentTarget.dataset.index)
  },

/**
 * 实现点赞帖子
 * @param {*} e 
 */
  onLikeTap(e){
    var that = this;
    var commentId_index = e.currentTarget.dataset.index;
    for(var i = 0 ; i<that.data.comment.length;++i) {
      if(that.data.comment[i].commentId == commentId_index) {
       var likeNum_index = that.data.comment[i].likeNum+1;
       var index = "comment[" + i + "].likeNum";
       that.setData({
         [index]:likeNum_index
       })
       //console.log(that.data.comment[i].likeNum)
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
    for(var i = 0 ; i<that.data.comment.length;++i) {
      if(that.data.comment[i].commentId == commentId_index) {
       var showChildren = that.data.comment[i].showChild;
       if(showChildren)
       {
         showChildren = false
       }
       else
       {
         showChildren = true
       }
       console.log(showChildren)
       var index = "comment[" + i + "].showChild";
       that.setData({
         [index]:showChildren,
         value:""
       })
       //console.log(that.data.comment[i].)
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