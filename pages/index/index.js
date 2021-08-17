// index.js

import {User} from '../../model/user'

const userApi = new User()

// 获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {
    // 加载时
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    var that=this;
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {

        wx.login({
          success: async (rs) => {
            if(rs.code){

              // index.js会比app.js先执行
                app.callback=()=>
                {
                  console.log("异步回调")
                  app.globalData.userInfo=res.userInfo;
                }
             
              console.log(app.globalData.userInfo)
              that.setData({
                hasUserInfo: true
              });

              let params = {
                code:rs.code, 
                name:res.userInfo.nickName,
                gender:res.userInfo.gender,
                avatar:res.userInfo.avatarUrl
              }
              userApi.userLogin(params).then(res => {
                app.globalData.userId = res.data.userId
              })

              // 获取信息之后进入地图页面
              wx.navigateTo({
        
                url: '../map/map',
                
              })
            }
          }
        })
        
      }
    })
  },
})
