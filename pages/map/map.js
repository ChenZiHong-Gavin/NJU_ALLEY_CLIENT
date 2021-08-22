// pages/map/map.js
import {Arch} from '../../model/arch'

const archApi = new Arch()

const app = getApp()

var mapCtx;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    latitude:32.11650,
    longitude:118.958150,
    height:200,
    markers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo
      })
  }
  var that=this;
 
  wx.getSystemInfo({
    success: (result) => {
      that.setData(
        {
          height: result.windowHeight
        }
      )
    },
  })

  mapCtx = wx.createMapContext('myMap');
  

},

showMarkers(){
  var that=this;
  var markers = [];
  archApi.getAllBuildings().then(res =>{

    console.log(res.data)
    res.data.forEach((p)=>{
      // 标记自定义图标
      
      let marker = {id:p.archId,latitude:p.latitude,longitude:p.longitude,iconPath:'../../static/image/logo/building.png',width:20,height:20,joinCluster:true}

      
      // 根据id确定图标
      switch(marker.id) {
        case 2:
        case 3:
        case 4:
          marker.iconPath='../../static/image/logo/yi.png'
          marker.width=40;
          break;
        case 14:
          // 方肇周
          marker.iconPath='../../static/image/logo/fzz.png'
          marker.width=40;
          break;
        case 18:
          // 杜厦图书馆
          marker.iconPath='../../static/image/logo/dx.png'
          marker.width=40;
           break;
        case 35:
          // 大活
          marker.iconPath='../../static/image/logo/dh.png'
          marker.width=40;
           break;
        // 食堂
        case 7:
        case 28:
        case 53:
        case 57:
        case 69:
          marker.iconPath='../../static/image/logo/shitang.png'
          marker.width=40;
          break;
        case 16:
        case 17:
          marker.iconPath='../../static/image/logo/xian.png'
          marker.width=40;
          break;
        default:
          marker.iconPath='../../static/image/logo/building.png'
   } 

      
      markers.push(marker)

      that.setData({
        markers:markers
      });
    })
  }).catch(err =>{
    console.log(err)
  })
  mapCtx.addMarkers({
    markers,
    clear: false,
    complete(res) {
      // console.log('addMarkers', res)
    }
  })
},

onMarkerTap: function (e) {
  //console.log(e)
  let archId = e.markerId;
  console.log("map-archId: " + archId)
  wx.navigateTo({
    url: '../../pages/building/building?archId=' + archId
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
    this.showMarkers();
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
  onBindUserTap: function () {

    wx.navigateTo({
   
      url: '../user/user',
       
      })

  },


})