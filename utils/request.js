import {Config} from 'config'
class Request{
  constructor(){
    this.baseUrl = Config.baseUrl
  }
  /**
   * 封装请求方法
   */
  request(params){
    let reqUrl = this.baseUrl + params.url
    wx.request({
      url: reqUrl,
      data: params.data,
      header:{
        'content-Type': 'application/json'
      },
      method: params.type,
      success: res => {
        params.sCallBack && params.sCallBack(res.data)
      },
      error: err => {
        params.eCallBack && params.eCallBack(res.data)
      }
    })
  }
}
export {Request}
