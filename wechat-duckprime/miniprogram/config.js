var data = {
      //云开发环境id
      env: 'duckprime',
      //分享配置
      share_title: '找书吧少年',
      share_img: '/images/poster12.jpg', //可以是网络地址，本地文件路径要填绝对位置
      share_poster:'https://mmbiz.qpic.cn/mmbiz_jpg/nJPznPUZbhpA064Cl78xxvzBYTDa6O1Kl7RY1K6TerBaXcUf5AoN6x7s8q7xHgeu0Cl5qarPzE6ibbQZasWRErg/640',//必须为网络地址
      //客服联系方式
      kefu: {
            weixin: 'qwe252313',
            qq: '511508105',
            gzh: 'https://mmbiz.qpic.cn/mmbiz_png/nJPznPUZbhpKCwnibUUqnt7BQXr3MbNsasCfsBd0ATY8udkWPUtWjBTtiaaib6rTREWHnPYNVRZYgAesG9yjYOG7Q/640', //公众号二维码必须为网络地址
            phone: '' //如果你不设置电话客服，就留空
      },
      //默认启动页背景图，防止请求失败完全空白 
      //可以是网络地址，本地文件路径要填绝对位置
      bgurl: '/images/startSm.jpg',
      
      //配置学院，建议不要添加太多，不然前端不好看
      college: [{
                  name: '名著',
                  id: -1
            },
            {
                  name: '小说',
                  id: 0
            },
            {
                  name: '社会',
                  id: 1
            },
            {
                  name: '文学',
                  id: 2
            },
            {
                  name: '言情',
                  id: 3
            },
            {
                  name: '诗歌',
                  id: 4
            },
            {
                  name: '少儿',
                  id: 5
            },
            {
                  name: '纪实',
                  id: 6
            },
            {
                  name: '翻译',
                  id: 7
            },
            {
                  name: '宗教',
                  id: 8
            },
            {
                  name: '财经',
                  id: 9
            },
            {
                  name: '天文',
                  id: 10
            },
            {
                  name: '电脑',
                  id: 11
            },
            {
                  name: '资料',
                  id: 12
            },
            {
                  name: '建筑',
                  id: 13
            },
            {
                  name: '其它',
                  id: 14
            },
      ],
}
//下面的就别动了
function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}