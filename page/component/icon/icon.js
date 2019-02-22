Page({
  data: {
    iconSize: [20, 30, 40, 50, 60],
    iconColor: [
      'red', 'yellow', 'blue', 'green',
    ],
    iconType: [
      'success',
      'info',
      'warn',
      'waiting',
      'clear',
      'success_no_circle',
      'download',
      'cancel',
      'search',
    ],
    teacher:[]
  },
  
 onPullDownRefresh:function(){
    console.log("刷新"); 
 
    wx.setNavigationBarTitle({
      title: '刷新中……'
    })//动态设置当前页面的标题。
 
    wx.showNavigationBarLoading();//在当前页面显示导航条加载动画。
 
    this.loadProduct2();//重新加载产品信息
 
    wx.hideNavigationBarLoading();//隐藏导航条加载动画。
 
    wx.stopPullDownRefresh();//停止当前页面下拉刷新。
 
    console.log("关闭");
 
    wx.setNavigationBarTitle({
      title: '寸草心+'
    })//动态设置当前页面的标题。
    
  },
     requestHttp() {
         var that=this;
    dd.httpRequest({
     
      url: 'http://172.16.0.134:8787/api/data/message/getmessage?ysdm=00&row=3&page=1&tjlb=&tjdm=0',
      method: 'GET',
      data: {
       
      },
      dataType: 'json',
      success: function(res) {
      
     that.setData({teacher:res.data.data});
     
    //  console.log(res.data.code);
   //  dd.alert({content:JSON.stringify(res)});
      },
      fail: function(res) {
        dd.alert({content: JSON.stringify(res)});
      },
      complete: function(res) {
        dd.alert({title: 'complete'});
      }
    });
  }
});
