
let app = getApp();

//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
//替换成开发者后台设置的安全域名
let servsers = app.globalData.servsers;

Page({
  data: {

    htmlUrla : servsers + "YdydDD/ddlb.html"
  },
  onLoad() {},
});
