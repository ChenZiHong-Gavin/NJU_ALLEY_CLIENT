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



}
export {User}