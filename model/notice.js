import {Request} from '../utils/request'
class Notice extends Request{
  constructor(){
    super();
  }

  getNotices(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`api/user/notices/${options.userId}`,
        data:options.data,
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

    // return Promise.resolve({data:
    //   [
    //     {
    //     noticeId:1,
    //     senderId:1,
    //     userId:2,
    //     commentId:-1,
    //     content:"ssssss",
    //     isUnread:false
    //   },
    //   {
    //     noticeId:2,
    //     senderId:6,
    //     userId:2,
    //     commentId:0,
    //     content:"ssssss",
    //     isUnread:true,
    //     senderName:"ss"
    //   },
    //   {
    //     noticeId:3,
    //     senderId:6,
    //     userId:2,
    //     commentId:0,
    //     content:"ssssss",
    //     isUnread:false,
    //   },
    //   {
    //     noticeId:4,
    //     senderId:6,
    //     userId:2,
    //     commentId:0,
    //     content:"ssssss",
    //     isUnread:true
    //   },
    // ]
    // })

  }


  readNotices(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`api/notice/read/${options.noticeId}`,
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

    // return Promise.resolve({
      
    // })

  }




}
export {Notice}