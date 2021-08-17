import {Request} from '../utils/request'
class Notice extends Request{
  constructor(){
    super();
  }

  getNotices(options){
    // return new Promise((resolve,reject)=>{
    //   let props = {
    //     url:`/user/notices/${options.userId}`,
    //     data:options.data,
    //     type:"GET",
    //     sCallBack:res=>{
    //       resolve(res)
    //     },
    //     eCallBack:res=>{
    //       reject(res)
    //     }
    //   }
    //   this.request(props)
    // })

    return Promise.resolve({data:
      [
        {
        noticeId:1,
        senderId:1,
        userId:2,
        commentId:-1,
        content:"ssssss",
        isUnread:false
      },
      {
        noticeId:1,
        senderId:2,
        userId:2,
        commentId:0,
        content:"ssssss",
        isUnread:false
      }
    ]
    })

  }


  readNotices(options){
    // return new Promise((resolve,reject)=>{
    //   let props = {
    //     url:`/notice/read/${options.noticeId}`,
    //     data:options.data,
    //     type:"GET",
    //     sCallBack:res=>{
    //       resolve(res)
    //     },
    //     eCallBack:res=>{
    //       reject(res)
    //     }
    //   }
    //   this.request(props)
    // })

    return Promise.resolve({
      
    })

  }




}
export {Notice}