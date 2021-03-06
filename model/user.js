import {Request} from '../utils/request'
class User extends Request{
  constructor(){
    super();
  }

  /**
   * 用户登陆
   */
  userLogin(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`api/user/login`,
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

    // return Promise.resolve({data:{
    //   userId:100

    // }})

  }


   /**
   * 获取用户信息
   */
  getUserData(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`api/user/view/${options.userId}`,
        data:options,
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


   /**
   * 是否点赞
   */
  getIsLiked(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`api/user/comment/isLike/${options.userId}?commentId=${options.commentId}`,
        data:options,
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



}
export {User}