Page({
  requestHttp() {
    // dd.httpRequest({
    //   url: 'http://httpbin.org/post',
    //   method: 'POST',
    //   data: {
    //     from: '钉钉',
    //     production: 'Dingtalk',
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     dd.alert({content: JSON.stringify(res)});
    //   },
    //   fail: function(res) {
    //     dd.alert({content: JSON.stringify(res)});
    //   },
    //   complete: function(res) {
    //     dd.alert({title: 'complete'});
    //   }
    // });

    dd.httpRequest({
      url: 'http://172.16.0.134:8787/api/data/message/getmessage?ysdm=00&row=3&page=1&tjlb=&tjdm=0',
      method: 'GET',
      data: {
        from: '钉钉',
        production: 'Dingtalk',
      },
      dataType: 'json',
      success: function(res) {
        dd.alert({content: JSON.stringify(res)});
      },
      fail: function(res) {
        dd.alert({content: JSON.stringify(res)});
      },
      complete: function(res) {
        dd.alert({title: 'complete'});
      }
    });

  }


  
})
