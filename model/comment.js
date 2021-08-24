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

  

}
export {Comment}