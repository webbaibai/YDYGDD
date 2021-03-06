import lifecycle from '/util/lifecycle';
import animModal from '/util/items';

const lastComponents = [
  {
    icon: '/image/canvas.png',
    title: '画布',
    entitle: 'Canvas',
    page: 'canvas',
  },
];

// lastComponents.push({
//   icon: '/image/api_open.png',
//   title: '开放组件',
//   entitle: 'OpenComponents',
//   subs: [
//     {
//       title: '跳转生活号',
//       entitle: 'Lifestyle',
//       page: 'lifestyle',
//     },
//     // {
//     //   title: '跳转云客服',
//     //   entitle: 'contact-button',
//     //   page: 'contact-button',
//     // },
//   ],
// });

Page({
  ...lifecycle,
  ...animModal.animOp,
  data: {
    ...animModal.data,
    pageName: 'component/index',
    pageInfo: {
      pageId: 0,
    },
    hidden: true,
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [
        {
          icon: '/image/new/icon_handhyginene.png',
          title: '手卫生',
          entitle: 'View',
          subs: [
            {
              title: '基础视图',
              entitle: 'View',
              page: 'view',
            },
            {
              title: '滚动视图',
              entitle: 'ScrollView',
              page: 'scroll-view',
            },
            {
              title: '滑动视图',
              entitle: 'Swiper',
              page: 'swiper',
            },
          ],
        }, {
          icon: '/image/new/icon_prevention_supervisory.png',
          title: '防控督导',
          entitle: 'Basic Content',
          subs: [
            {
              title: '文字',
              entitle: 'Text',
              page: 'text',
            },
            {
              title: '图标',
              entitle: 'Icon',
              page: 'icon',
            },
            {
              title: '进度条',
              entitle: 'Progress',
              page: 'progress',
            },
          ],
        }, {
          icon: '/image/new/icon_prevalence_rate_reserrch.png',
          title: '现患率调查',
          entitle: 'Form',
          subs: [
            {
              title: '按钮',
              entitle: 'Button',
              page: 'button',
            },
            {
              title: '复选框',
              entitle: 'Checkbox',
              page: 'checkbox',
            },
            {
              title: '表单',
              entitle: 'Form',
              page: 'form',
            },
            {
              title: '文本输入',
              entitle: 'Input',
              page: 'input',
            },
            {
              title: '标签',
              entitle: 'Label',
              page: 'label',
            },
            {
              title: '选择器视图',
              entitle: 'PickerView',
              page: 'picker-view',
            },
            {
              title: '选择器',
              entitle: 'Picker',
              page: 'picker',
            },
            {
              title: '单选框',
              entitle: 'Radio',
              page: 'radio',
            },
            {
              title: '滑动条',
              entitle: 'Slider',
              page: 'slider',
            },
            {
              title: '开关',
              entitle: 'Switch',
              page: 'switch',
            },
            {
              title: '多行输入',
              entitle: 'Textarea',
              page: 'textarea',
            },
          ],
        }, {
          icon: '/image/new/icon_occupational_protection.png',
          title: '职业防护',
          entitle: 'Feedback',
          subs: [
            {
              title: '动作面板',
              entitle: 'ActionSheet',
              page: 'action-sheet',
            },
            {
              title: '对话框',
              entitle: 'Modal',
              page: 'modal',
            },
            {
              title: '轻提示',
              entitle: 'Toast',
              page: 'toast',
            },
            {
              title: '加载提示',
              entitle: 'Loading',
              page: 'loading',
            },
          ],
        }
        
        //, {
        //  icon: '/image/media.png',
        //  title: '媒体组件',
         // entitle: 'Media', page: 'image',
        //}, 
        // {
        //   icon: '/image/map.png',
        //   title: '地图',
        //   entitle: 'Map',
        //   page: 'map',
        // },
        //...lastComponents,
      ],
    },
  },
  onGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index;
    const childList = this.data.arr.list[curIndex];
    if (childList.subs) {
     switch(curIndex)
      {
        case 0:
        {
       const { page } = e.currentTarget.dataset;
      dd.navigateTo({ url: '/page/SWS/index/index' });
        }
        break;
        case 1:
        {
       const { page } = e.currentTarget.dataset;
      dd.navigateTo({ url: '/page/fkdd/pei/pei' });
        }
        break;
        case 2:
        {
       const { page } = e.currentTarget.dataset;
      dd.navigateTo({ url: '/page/xhldc/index/index' });
        }
      
        break;
      case 3:
        {
       const { page } = e.currentTarget.dataset;
      dd.navigateTo({ url: '/page/zyfh/index/index' });
        }
        break;
        default:
        break;
      }
  
    } else {
      this.onChildItemTap({
        currentTarget: {
          dataset: { page: childList.page },
        },
      });
    }
  },
  onChildItemTap(e) {
    const { page } = e.currentTarget.dataset;
    dd.navigateTo({
      url: `${page}/${page}`,
    });
  },
  onModalCloseTap() {
    this.createMaskHideAnim();
    this.createContentHideAnim();
    setTimeout(() => {
      this.setData({
        hidden: true,
      });
    }, 210);
  },
});
