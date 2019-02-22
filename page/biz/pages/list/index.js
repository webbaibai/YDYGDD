import list from '../../components/list';
let app = getApp();
let servsers = app.globalData.servsers;

Page({
  ...list,
  data: {
    listData: {
      onItemTap: 'handleListItemTap',      
      data: [],
      
    },
      msg: [{
		"XXID": "1",
		"DDRQ": "20170718",
		"ITEMID": "1",
		"BRXM": "骆强",
		"ZYHM": "107028301",
		"SYXH": "148422",
		"XXLB": "0",
		"LBMC": "多耐药",
		"KSDM": "601     ",
		"KSMC": "中医一科",
		"BQDM": "8601    ",
		"BQMC": "中医一科",
		"YSDM": "00",
		"YSMC": "",
		"MESSAGE": "耐甲氧西林金黄色葡萄球菌(MRSA)",
		"TSSJ": "2017071504:07:53",
		"XXZT": "0",
		"DDDM": "85"
	}, {
		"XXID": "2",
		"DDRQ": "20170718",
		"ITEMID": "7",
		"BRXM": "冯福宗",
		"ZYHM": "104833405",
		"SYXH": "143658",
		"XXLB": "0",
		"LBMC": "多耐药",
		"KSDM": "126     ",
		"KSMC": "重症医学一科",
		"BQDM": "8126    ",
		"BQMC": "重症医学一科",
		"YSDM": "00",
		"YSMC": "",
		"MESSAGE": "其他多重耐药菌",
		"TSSJ": "2017071601:07:30",
		"XXZT": "0",
		"DDDM": "85"
	}, {
		"XXID": "3",
		"DDRQ": "20170718",
		"ITEMID": "1",
		"BRXM": "李友生",
		"ZYHM": "103329602",
		"SYXH": "149046",
		"XXLB": "0",
		"LBMC": "多耐药",
		"KSDM": "111     ",
		"KSMC": "肝胆外科",
		"BQDM": "8111    ",
		"BQMC": "肝胆外科",
		"YSDM": "00",
		"YSMC": "",
		"MESSAGE": "其他多重耐药菌",
		"TSSJ": "2017071708:07:31",
		"XXZT": "0",
		"DDDM": "85"
	}],
  },
  onReady(){
    let  that=this;
    // that.requestHttp()
  },
    requestHttp(){
       let that=this;
    dd.httpRequest({
     
      url: servsers + "api/data/message/getmessage?ysdm=00&row=100&page=1&tjlb=&tjdm=0",
      method: 'GET',
      data: {
       
      },
      dataType: 'json',
      success: function(res) {
      
     that.setData({msg:res.data.data});
     console.log(res.data.data[0]);
   //  dd.alert({content:JSON.stringify(res)});
      },
      fail: function(res) {
        dd.alert({content: JSON.stringify(res)});
      },
      // complete: function(res) {
      //   dd.alert({title: 'complete'});
      // }
    });

  },
  handleListItemTap(e) {
    dd.showToast({
      content: `第${e.currentTarget.dataset.index}个Item`,
      success: (res) => {

      },
    });
  }

  
})