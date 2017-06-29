var express = require('express')
var bodyParser = require('body-parser');  //新版要自行引入
var serveStatic = require('serve-static'); //新版要自行引入
var port = process.env.PORT || 3000
var app = express()
var path = require('path')
app.set('views' , './views/pages') //根目錄的路徑
app.set('view engine' , 'pug') //設定使用pug
app.listen(port)
app.use(bodyParser.urlencoded({
	extended: true
}));
// 下幾行是版本問題，學習過程留下的提示 
// app.use(express.bodyParser());   过版本语法，现已不支持
//上面那个要加extended:true，否则会在post的时候出错
//将表单里的数据进行格式化
app.use(serveStatic('bower_components'));
// 下幾行是版本問題，學習過程留下的提示 
// app.use(express.static(path.join(__dirname,'bower_components')));  过去版语法，现已不支持
// 设置静态目录，其实就是使view中引入的东西路径正确
console.log('imovie start on' + port)

// index page
app.get('/' ,function(req,res){
    res.render('index', {
        title: 'imovie 首頁',
        movies: [{
          title: '异形：契约',
          _id: 1,
          poster: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459944375.webp'
          },
          {
          title: '异形：契约',
          _id: 2,
          poster: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459944375.webp'
          },
          {
          title: '异形：契约',
          _id: 3,
          poster: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459944375.webp'
          },
          {
          title: '异形：契约',
          _id: 4,
          poster: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459944375.webp'
          },
          {
          title: '异形：契约',
          _id: 5,
          poster: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459944375.webp'
      }],
    })
})

// detail page
app.get('/movie/:id' ,function(req,res){
    res.render('detail', {
        title: 'imovie 詳情頁',
        movie: {
          director: '雷德利·斯科特',
          country: '美国',
          title: '异形：契约',
          year: 2017,
          poster: 'https://img3.doubanio.com/img/celebrity/small/32214.jpg',
          language: '英语',
          flash: 'http://player.youku.com/player.php/sid/XMjgyMTgzMzU2OA==/v.swf',
          summary:'“科幻之父”雷德利-斯科特将为他所开创的《异形》系列带来新篇章。《异形：契约》的故事发生在《普罗米修斯》10年后，一群新的宇航员乘坐着“契约号”飞船前往遥远的星系寻找殖民地，他们来到一处看似天堂般的星球，实则是黑暗、危险的地狱，在那里他们见到了“普罗米修斯”号唯一的幸存者——由迈克尔·法斯宾德饰演的生化人大卫，一场毁灭性的巨大灾难即将到来。'
        }
    })
})
// admin page
app.get('/admin/movie' ,function(req,res){
    res.render('admin', {
        title: 'imovie 後台',
        movie: {
          title: '',
          director: '',
          country: '',
          year: '',
          poster: '',
          flash: '',
          summary: '',
          language: ''
        }
    })
})
// list page
app.get('/admin/list' ,function(req,res){
    res.render('list', {
        title: 'imovie 列表頁',
        movies: [{
          title: '异形：契约',
          _id: 1,
          director: '雷德利·斯科特',
          country: '美国',
          year: 2017,
          poster: 'https://img3.doubanio.com/img/celebrity/small/32214.jpg',
          language: '英语',
          flash: 'http://player.youku.com/player.php/sid/XMjgyMTgzMzU2OA==/v.swf',
          summary:'“科幻之父”雷德利-斯科特将为他所开创的《异形》系列带来新篇章。《异形：契约》的故事发生在《普罗米修斯》10年后，一群新的宇航员乘坐着“契约号”飞船前往遥远的星系寻找殖民地，他们来到一处看似天堂般的星球，实则是黑暗、危险的地狱，在那里他们见到了“普罗米修斯”号唯一的幸存者——由迈克尔·法斯宾德饰演的生化人大卫，一场毁灭性的巨大灾难即将到来。'
        }]
    })
})