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
  that.openAggator();
  that.showMarkers();
  

},

showMarkers(){
  var markers = [];
  archApi.getAllBuildings().then(res =>{
    res.data.forEach((p)=>{
      // 标记自定义图标
      
      let marker = {id:p.archId,latitude:p.latitude,longitude:p.longitude,iconPath:'../../static/image/index/ding.png',width:20,height:20}
      
      //TODO:根据id确定图标

      // console.log(marker.iconPath)
      markers.push(marker)

      this.setData({
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


  openAggator() {
      mapCtx.initMarkerCluster({
      enableDefaultStyle: false,
      zoomOnClick: true,
      gridSize: 60,
      complete(res) {
        console.log('initMarkerCluster', res)
      }
    })

      mapCtx.on('markerClusterCreate', res => {
      console.log('clusterCreate', res)
      const clusters = res.clusters
      const markers = clusters.map(cluster => {
        const {
          center,
          clusterId,
          markerIds
        } = cluster
        return {
          ...center,
          width: 0,
          height: 0,
          clusterId, // 必须
          label: {
            content: markerIds.length + '',
            fontSize: 12,
            width: 30,
            color: 'white',
            height: 30,
            bgColor: '#00A3FA',
            borderRadius: 15,
            textAlign: 'center',
            anchorX: 0,
            anchorY: -30,
          }
        }
      })
      mapCtx.addMarkers({
        markers,
        clear: false,
        complete(res) {
          console.log('clusterCreate addMarkers', res)
        }
      })
    })
  },


})