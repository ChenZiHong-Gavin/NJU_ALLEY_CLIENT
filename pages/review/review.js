// pages/review/review.js
// 通知组件
import Notify from '../../vant-weapp/dist/notify/notify';

import {Arch} from '../../model/arch'
import {Comment} from '../../model/comment'

const archApi = new Arch()
const commnetApi = new Comment()

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
    mark_text_value:"",
    fileList:[],
    showSuccess:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
    let building_name = options.building_name;
    let archId = options.archId;
    console.log("review-archId: " + archId);
    that.setData({
      user_name:app.globalData.userInfo.nickName,
      building_name:building_name,
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

    // 判断是否打了星级
    if(this.data.value==0)
    {
      Notify("请给建筑打分");
      return;
    }

    // 判断文本是否为空
    if(this.data.mark_text_value=="")
    {
      Notify("请输入你的评论");
      return;
    }

     // console.log(this.data.mark_text_value)

     let ArchCommentDTO = {
       archId:this.data.archId,
       // 没有父评论
       // fatherId:-1,
       userId:app.globalData.userId,
       content:this.data.mark_text_value,
       picture:this.data.fileList[0] | -2
     }
     console.log(ArchCommentDTO)
     archApi.commentBuilding(ArchCommentDTO).then(res =>{

      console.log(res)
     })
     // 评分
     archApi.rateBuilding({archId:this.data.archId, score:this.data.value, userId:app.globalData.userId}).then(res =>{

      console.log(res)
      this.onClickShow();
  
     })
  },

  // 返回空间
  onBindBackTap(){
    wx.navigateBack({
      delta: 1
    })
    
  },

  afterRead(event) {
    // console.log("after-read")
    // console.log(event)
    // 获取阿里oss的policy

    commnetApi.getPolicy().then(res=>
      {
        console.log(res.data)
      }
    )
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    // 上传到远端服务器
    wx.uploadFile({
      url: '', 
      filePath: file.url,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    });
  },

  //控制使用条款遮罩层的两个方法
  onClickShow() {
    this.setData({ showSuccess: true });
  },

  onClickHide() {
    this.setData({ showSuccess: false });
    wx.navigateBack({
      delta: 2,
    })
  },
})