# 🌟加一个星星

1. 注册腾讯移动分析账号

   草 ![img](https://pic4.zhimg.com/v2-a5f8ba801fa3b30bd20cc2389c0628c7_b.jpg)

2. 企业认证

   注册一家公司大概要600元，南京地区

   要等三天审核

   我跟我爸妈要的企业认证用的号码

3. 小程序命名

   需要等域名审核结果出来

4. 关闭云开发

5. 使用weapp组件

   使用的是下载源码的形式

6. 学习flex布局

7. 完成逻辑跳转和基本功能



微信小程序使用百度地图API



微信小程序自带map组件

只要

``` wxml
<map id="map" longitude="113.324520" latitude="23.099994" scale="14"></map>
```

map组件默认使用腾讯地图

全屏

``` js
//index.js
var app = getApp()
Page({
    data: {
        height: 'auto'
    },
    onLoad: function () {
        //保证wx.getSystemInfo的回调函数中能够使用this
        var that = this
 
        //调用wx.getSystemInfo接口，然后动态绑定组件高度
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    height: res.windowHeight
                })
            }
        })
 
    }
})
```

 



使用ESMAP



使用npm

使用百度地图的JavaScript



算了

还是使用webview调用h5页面

可以和小程序进行正常交互

md

小程序问题太多了

鬼都不写



1.打开的域名没有在小程序管理后台设置业务域名（注意是业务域名，不是服务器域名）
2.打开的页面必须为https服务
3.打开的页面302过去的地址也必须设置过业务域名
4.web-view空白问题，请升级微信客户端到 6.5.16
5.页面可以包含iframe，但是iframe的地址必须为业务域名
6.web-view不支持支付能力，web-view的API能力见web-view的文档说明
7.开发者自己检查自己的https服务是否正常，测试方法：普通浏览器打开对应的地址
8.如果web-view使用了公众号授权的服务，开发者工具提示网页开发者的问题，请见：公众号开发



页面跳转方式记下来

白页动画





web-view是承载网页的容器

会自动铺满整个小程序页面

个人类型的小程序暂不支持使用



编写h5

部署

需要通过域名备案才行



确定了还是用微信小程序的原生map组件

在真机演示上效果惊人

比我想象中的好多了



现在是

头像悬浮



全面屏： "navigationStyle": "custom",





