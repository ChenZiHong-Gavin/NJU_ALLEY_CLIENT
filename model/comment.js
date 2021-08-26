import {Request} from '../utils/request'
class Comment extends Request{
  constructor(){
    super();
  }

  getPolicy(){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`api/oss/policy`,
        type:"GET",
        sCallBack:res=>{
          resolve(res)
        },
        eCallBack:res=>{
          reject(res)
        }
      }
      this.request(props)
    })
  }

  
  likeComment(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`api/comment/like/${options.commentId}?userId=${options.userId}`,
        data:options.data,
        type:"POST",
        sCallBack:res=>{
          resolve(res)
        },
        eCallBack:res=>{
          reject(res)
        }
      }
      this.request(props)
    })
  }

  

  /**
   * 评论建筑
   */
  commentComment(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`api/comment/comment`,
        data:options,
        type:"POST",
        sCallBack:res=>{
          resolve(res)
        },
        eCallBack:res=>{
          reject(res)
        }
      }
      this.request(props)
    })
  }
}
export {Comment}