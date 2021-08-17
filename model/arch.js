import {Request} from '../utils/request'
class Arch extends Request{
  constructor(){
    super();
  }

  /**
   * 获取所有建筑
   */
  getAllBuildings(options){
    // return new Promise((resolve,reject)=>{
    //   let props = {
    //     url:`/arch/all`,
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

  return Promise.resolve({data:[
        {archId:1,latitude:32.112457,longitude:118.956021},
        {archId:2,latitude:32.111371,longitude:118.955036},
        {archId:3,latitude:32.112278,longitude:118.959157}
      ]})

  }

  /**
   * 查看建筑信息
   */
  getBuildingDetail(options){
    // return new Promise((resolve,reject)=>{
    //   let props = {
    //     url:`/arch/view/${options.archId}`,
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
      { archId:3,
        name:'炜华体育场',
        des:'伟华体育场是仙林校区最活跃的体育运动场，位于教学楼旁侧，是举办大型校内活动的专属地点',
        latitude:32.112457,
        longitude:118.956021,
        pictures:['https://nju-alley.oss-cn-beijing.aliyuncs.com/1.jpg'],
        score:4.3,
        comments:[
          {
            commentId:0,
            fatherId:-1,
            userId:10,
            userName:'张三',
            userAvatar:"../../static/image/box/box_body.png",
            likeNum:20,
            createT:'2021-8-15',
            content:'test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1',
            picture:'../../static/image/box/box_body.png',
            showChild:true,
            children:[
              {
                commentId:1,
                fatherId:0,
                userId:2,
                userName:'小明',
                userAvatar:"../../static/image/introduce/state1.png",
                likeNum:100,
                createT:'2021-8-15',
                content:'test1.1',
                picture:'../../static/state1.png',
                children:[]
              }
            ]
          },
          {
            commentId:2,
            fatherId:-1,
            userId:12,
            userName:'李四',
            userAvatar:"../../static/state1.png",
            likeNum:50,
            createT:'2021-8-12',
            content:'test2test2test2test2test2test2test2test2test2test2test2test2',
            picture:'-2',
            showChildren:false,
            children:[]
          },
          // {
          //   commentId:3,
          //   fatherId:-1,
          //   userId:12,
          //   userName:'李四',
          //   userAvatar:"../../static/state1.png",
          //   likeNum:50,
          //   createT:'2021-8-12',
          //   content:'test2test2test2test2test2test2test2test2test2test2test2test2',
          //   picture:'-2',
          //   children:[]
          // },
          // {
          //   commentId:4,
          //   fatherId:-1,
          //   userId:10,
          //   userName:'张三',
          //   userAvatar:"../../static/image/box/box_body.png",
          //   likeNum:20,
          //   createT:'2021-8-15',
          //   content:'test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1',
          //   picture:'../../static/image/box/box_body.png',
          //   children:[
          //     {
          //       commentId:5,
          //       fatherId:0,
          //       userId:2,
          //       userName:'小明',
          //       userAvatar:"../../static/image/introduce/state1.png",
          //       likeNum:100,
          //       createT:'2021-8-15',
          //       content:'test1.1',
          //       picture:'../../static/state1.png',
          //       children:[]
          //     }
          //   ]
          // },
          // {
          //   commentId:6,
          //   fatherId:-1,
          //   userId:10,
          //   userName:'张三',
          //   userAvatar:"../../static/image/box/box_body.png",
          //   likeNum:20,
          //   createT:'2021-8-15',
          //   content:'test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1',
          //   picture:'../../static/image/box/box_body.png',
          //   children:[
          //     {
          //       commentId:7,
          //       fatherId:0,
          //       userId:2,
          //       userName:'小明',
          //       userAvatar:"../../static/image/introduce/state1.png",
          //       likeNum:100,
          //       createT:'2021-8-15',
          //       content:'test1.1',
          //       picture:'../../static/state1.png',
          //       children:[]
          //     }
          //   ]
          // },
        ]
      },
    })

  }

  /**
   * 评论建筑
   */
  commentBuilding(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`/arch/comment`,
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

  /**
   * 对建筑评分
   */
  rateBuilding(options){
    return new Promise((resolve,reject)=>{
      let props = {
        url:`/arch/mark/${options.archId}?score=${options.score}?userId=${options.userId}`,
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
  
}
export {Arch}