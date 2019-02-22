// import {DDhttpRequest,exceptionHandle} from  '../../util/request';
let app = getApp();

//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
//替换成开发者后台设置的安全域名
let servsers = app.globalData.servsers;

Page({

data: {
  phoneV: '00',  
  passwordV: '11',
},

phoneText:function(e){
    this.setData({
      phoneV:e.detail.value
    })
 },

 passwordText:function(e){
    this.setData({
      passwordV:e.detail.value
    })
 },

onLoad(){
  duration:100000
},

onReady(){
   let _this = this;
   setTimeout(function () {
   _this.formSubmit();
  }, 600)
},

formSubmit: function() {

      // 提交数据
      dd.showLoading({
        // content: '登录中',
      })

      var that=this;
      var method="get";
      var url=servsers+"api/data/employee/login";
      var inputVal=this.data;
      var datas = {
        user: inputVal.phoneV,
        password: inputVal.passwordV,
      };
      console.log(datas)
      dd.httpRequest({
        url: url, //仅为示例，并非真实的接口地址
        method:method,
        data: datas,
        headers: {
          'content-type': 'application/json', // 默认值
        },
        success: function (res) {
          dd.hideLoading()
          var data = res.data;
          if (data.code == 0) {
            // var user=data.user;
            // var customerId = user.customerId;//客户id

            // dd.setStorageSync({
            //   key: 'userInfo',
            //   data: {
            //       realName: user.realName,
            //       username: user.username,
            //       roleList: user.roleNameList,
            //       roleIdList: user.roleIdList,
            //       customerId: user.customerId,
            //       userId: user.userId,
            //   }
            dd.showToast({
                type: 'success',
                content: '登录成功',
                duration: 3000,
            })
            dd.switchTab({
              url: '../component/index'
            })
            that.getInfo()

          }
          else{
            dd.showToast({
                type: 'fail',
                content: '账号密码错误',
                duration: 3000,
            })
          }
          // //存储用户信息
          //   var ddUserId = data.user.ddUserId;
          //   if (!ddUserId) {
          //     that.bindDDUserId()//绑定DDUserId
          //   }
          }
        })
},

  //   获取用户信息
getInfo:function(){
      var that=this;
      var url = servsers+"api/data/employee/info";//接口地址
      var inputVal=this.data;
      var datass = {
        id: inputVal.phoneV
      };
      var method="get";
      dd.httpRequest({
        url: url, //仅为示例，并非真实的接口地址
        method:method,
        data: datass,
        headers: {
          'content-type': 'application/json', // 默认值
        },
        success: function (res) {
          var result = res.data;
          if (result.code == 0) {
            var resultData=result.data;
            console.log(result)
            dd.setStorageSync({
              key: 'userInfo',
              data: {
                  userId: resultData.id,
                  username: resultData.name,
                  ksmc: resultData.ksmc,
              }
            })//存储用户信息
          }
        }
      })
  }
})