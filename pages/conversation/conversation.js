// pages/post/post.js

const app = getApp()

Page({
 

  /**
   * 页面的初始数据
   */
  data: {
    postId:0,
    labelId:0,
    label:'',
    userId:0,
    title:'',
    avatarUrl:'https://nju-alley.oss-cn-beijing.aliyuncs.com/1.jpg',
    nickName:'南大学生会官方用户',
    // avatarUrl:'',
    // nickName:'',
    content:'',
    hasPicture: true,
    pictureUrl:'',
    likeNum:0,
    shareNum:0,
    chatNum:0,
    timeStamp:'',
    show:false,
    color1:'#000000',
    comments:[
    {commentUserId:1,commentAvatar:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F11358558370%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624982595&t=af445b9b7c5657885916fc357a93388b',commentNickname:'南大校草',commentTimeStamp:'2021-05-21 10:28:08',commentContent:'这必须去呀'},
    {commentUserId:2,commentAvatar:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=347975653,3316754941&fm=26&gp=0.jpg',commentNickname:'南大校花',commentTimeStamp:'2021-05-22 10:30:00',commentContent:'十大等我！！!'},
    {commentUserId:3,commentAvatar:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=819881539,1696020319&fm=26&gp=0.jpg',commentNickname:'南大小巷忠实用户',commentTimeStamp:'2021-05-22 22:28:36',commentContent:'我来看小姐姐小哥哥了'},
    {commentUserId:4,commentAvatar:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=68083303,2735055897&fm=26&gp=0.jpg',commentNickname:'菜根潭在逃青蛙',commentTimeStamp:'2021-05-23 10:25:08',commentContent:'孩子没领到票，去不了了呜呜呜'},
    {commentUserId:5,commentAvatar:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4291771974,2843218373&fm=26&gp=0.jpg',commentNickname:'四栋楼下浩哥',commentTimeStamp:'2021-05-23 10:28:52',commentContent:'哈哈哈楼上好惨，我领到了vip票，不过排队确实累'}
    ],
    // comments:[],
    commentContent:''
  },
  toOthers1(){
    let userId=this.data.userId;
    wx.navigateTo({
      url: '/pages/others/others?userId='+userId,
    })
  },
  showBig(){
    wx.previewImage({
      urls: [this.data.pictureUrl],
      current:this.data.pictureUrl
    })
  },
  
  toOthers(e){
    let userId = e.currentTarget.dataset.userid
    wx.navigateTo({
      url: '/pages/others/others?userId='+userId,
    })
  },

  goodJob(){
    if(this.data.color1=='#000000'){
      this.data.likeNum++;
      this.setData({
        likeNum:this.data.likeNum,
        color1:'#009900',
      });
    }
    else{
      this.data.likeNum--;
      this.setData
      ({
        likeNum:this.data.likeNum,
        color1:'#000000',
      })
    }
    let params = {postId:this.data.postId,userId:app.globalData.userId}
    postApi.PostLikeAction(params)

  },

  shareTo(detail){
    this.data.shareNum++;
    //为啥一定要写下面这个
    this.setData({
      shareNum:this.data.shareNum
    });
  },

  chatTo(){
    this.setData({
      show:true
    });
  },

  inputComment(event){
    this.setData({
      commentContent:event.detail
    })
  },

  onClose()
  {
    this.setData({
      show:false
    });
  },

  shareComment()
  {
    let params = {userId:app.globalData.userId,postId:this.data.postId,fatherId:0,content:this.data.commentContent}
    var commentContent = this.data.commentContent
    postApi.PostCommentAction(params).then(res =>{

     // var time = new Date(res.data.createTime).toDateString()

      this.data.comments.push({commentUserId:app.globalData.userId,commentAvatar:app.globalData.userAvatarUrl,commentNickname:app.globalData.userName,commentTimeStamp:res.data.createTime,commentContent:commentContent})
      console.log(this.data.comments)
      // this.data.comments.push({commentUserId:app.globalData.userId,commentAvatar:app.globalData.userAvatarUrl,commentNickname:app.globalData.userName,commentTimeStamp:'2021-06-02 14:50:21',commentContent:commentContent})
      // console.log(this.data.comments)

      //必写!!!!
      this.setData({
        comments:this.data.comments
      })
    })

    this.data.chatNum++;
    this.setData({
      commentContent:'',
      chatNum:this.data.chatNum
    })
    this.onClose();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    let postID = options.postID;
    that.setData({
      postId:postID
    })
    let params = {postId:postID}
    let label = ''
    let res_comments = []
    postApi.getPostDetail(params).then(res=>{
      // console.log(res)
      // var time = (new Date(res.data.createTime)).toISOString().split('T')[0]
      // console.log(time)
      that.setData({
        labelId:res.data.labelId,
        title:res.data.title,
        content:res.data.content,
        likeNum:res.data.likeNum,
        chatNum:res.data.commentNum,
        timeStamp:res.data.createTime,
        hasPicture:res.data.hasPicture,
        pictureUrl:res.data.pictureUrl,
      })
  
      userApi.getUserInfo({userId:res.data.userId}).then(rs=>{
        that.setData({
          avatarUrl:rs.data.avatarUrl,
          nickName:rs.data.name
        })
      })

      res_comments = [].concat(res.data.comments)

      if(that.data.labelId==1){
        label = '随笔'
      }else if(that.data.labelId==2){
        label = '通知'
      }else if(that.data.labelId==3){
        label = '反馈'
      }
      that.setData({
        label:label
      })
      let comments = []
      res_comments.forEach(p=>{
        let comment = {commentUserId:0,commentAvatar:'',commentNickname:'',commentTimeStamp:'',commentContent:''}
        comment.commentUserId = p.userId
        comment.commentTimeStamp = p.createTime
        comment.commentContent = p.content
        let params = {userId:p.userId}
        userApi.getUserInfo(params).then(rss=>{
          comment.commentNickname = rss.data.name
          comment.commentAvatar = rss.data.avatarUrl
        })
        comments.push(comment)
      })
  
      that.setData({
        comments:comments
      })
    }).catch(err=>{
      console.log(err)
    })

    userApi.getUserLikeStatus({userId:app.globalData.userId, typeId:1, targetId:postID}).then(res=>{
      if(res.data.isLike == true){
        this.setData({
          color1:'#009900'
        })
      }else if(res.data.isLike == false){
        this.setData({
          color1:'#000000'
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

})