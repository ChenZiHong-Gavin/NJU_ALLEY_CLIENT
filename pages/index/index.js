// index.js
// 获取应用实例
const app = getApp()

import {User} from '../../model/user'

const userApi = new User()


Page({
  data: {
    hasUserInfo: false,
    canIUseGetUserProfile: false,

  },
  onLoad() {
    var that=this;
    // 加载时
    if (wx.getUserProfile) {
      that.setData({
        canIUseGetUserProfile: true
      })
    }

  },

  onShow() {
    console.log(app)
  },

  getUserProfile(e) {
    var that=this;
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '获取用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {

        wx.setStorage({                                   //设置本地缓存
          key:"userInfo",
          data: res.userInfo
        })
        // console.log(res)
        wx.login({
          success: async (rs) => {
            if(rs.code){     
              console.log(rs.code)
              // app.globalData.code=rs.code;
              // 向后端发送登录请求
              let params = {
                code:rs.code, 
                name:res.userInfo.nickName,
                gender:res.userInfo.gender,
                avatar:res.userInfo.avatarUrl
              }
              userApi.userLogin(params).then(rss => {
                // app.globalData.userId = rss.data.userId
                // app.globalData.userInfo=res.userInfo;
                wx.setStorage({                                   //设置本地缓存
                  key:"userId",
                  data: rss.data.userId
                })
              })
     
              // app.globalData.userInfo=res.userInfo;
              // console.log(app.globalData.userInfo)
              that.setData({
                hasUserInfo: true
              });

              
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
