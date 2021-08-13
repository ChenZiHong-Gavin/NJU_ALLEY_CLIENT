import {Request} from '../utils/request'
class Arch extends Request{
  constructor(){
    super();
  }

  /**
   * 获取所有建筑
   */
  getAllBuildings(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`/api/arch/all`,
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

  // return Promise.resolve({data:[
  //       {archId:1,latitude:32.112457,longitude:118.956021},
  //       {archId:2,latitude:32.111371,longitude:118.955036},
  //       {archId:3,latitude:32.112278,longitude:118.959157}
  //     ]})

  }

  /**
   * 查看建筑信息
   */
  getBuildingDetail(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`/api/arch/view/${options.archId}`,
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

  //   return Promise.resolve({data:
  //     { archId:1,
  //       name:'炜华体育场',
  //       des:'伟华体育场是仙林校区最活跃的体育运动场，位于教学楼旁侧，是举办大型校内活动的专属地点',
  //       latitude:32.112457,
  //       longitude:118.956021,
  //       pictures:['https://nju-alley.oss-cn-beijing.aliyuncs.com/0.jpg'],
  //       // comments:[
  //       //   {id:0,postId:1,content:"这必须去呀",userId:7,createTime:"2021-05-21 10:28:08"},
  //       //   {id:1,postId:1,content:"十大等我！！！",userId:7,createTime:"2021-05-22 10:30:00"},
  //       //   {id:2,postId:1,content:"我来看小姐姐小哥哥了",userId:8,createTime:"2021-05-22 22:28:36"},
  //       //   {id:3,postId:1,content:"孩子没领到票，去不了了呜呜呜",userId:9,createTime:"2021-05-23 10:25:08"},
  //       //   {id:4,postId:1,content:"哈哈哈楼上好惨，我领到了vip票，不过排队确实累",userId:7,createTime:"2021-05-23 10:28:52"}
  //       // ]
  //     },
  //   })

  }
  
}
export {Arch}