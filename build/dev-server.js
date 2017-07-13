require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
app.get('/goodslist',function(req,res){
  res.json({
    lists:[
      {  "id":1,
        "url":"http://img1.caichongwang.com/thumbs/0022255_100.jpg",
        "gname":"越南白肉火龙果",
        "gprice":"¥59.90",
        "deals":"5斤/箱"
      },
       {   "id":2,
        "url":"http://img1.caichongwang.com/thumbs/0033354_100..jpg",
        "gname":"台湾进口金钻凤梨",
        "gprice":"¥69.00",
        "deals":"2个/份 约4.5斤"
      },
       {   "id":3,
        "url":"http://img1.caichongwang.com/thumbs/0027824_100..jpg",
        "gname":"非洲火参果 2个装",
        "gprice":"¥39.00",
        "deals":"2个/箱"
      },
       { "id":4,
        "url":"http://img1.caichongwang.com/thumbs/0043919_100..jpg",
        "gname":"泰国百香果",
        "gprice":"¥59.90",
        "deals":"30个/箱"
      },
       { "id":5,
        "url":"http://img1.caichongwang.com/thumbs/0040666_100..jpg",
        "gname":"菲律宾凤梨",
        "gprice":"¥59.90",
        "deals":"2个/箱 约4斤"
      },
      { "id":6,
        "url":"http://img1.caichongwang.com/thumbs/0024274_100..jpg",
        "gname":"陕西大荔冬枣",
        "gprice":"¥109.00",
        "deals":"3斤/盒"
      },
      { "id":7,
        "url":"http://img1.caichongwang.com/thumbs/0050255_100..jpg",
        "gname":"山东烟台红富士苹果 80#",
        "gprice":"¥49.90",
        "deals":"4.5斤/箱"
      },
      { "id":8,
        "url":"http://img1.caichongwang.com/thumbs/0045437_100..jpg",
        "gname":"海南夏威夷红心木瓜",
        "gprice":"¥68.00",
        "deals":"4个装"
      },
      { "id":9,
        "url":"http://img1.caichongwang.com/thumbs/0047010_100..jpg",
        "gname":"新疆库尔勒香梨",
        "gprice":"¥65.00",
        "deals":"5斤/份"
      },
      { "id":10,
        "url":"http://img1.caichongwang.com/thumbs/0050284_100..jpg",
        "gname":"越南农家自产紫薯",
        "gprice":"¥39.90",
        "deals":"5斤/袋"
      },
      { "id":11,
        "url":"http://img1.caichongwang.com/thumbs/0045557_100..jpg",
        "gname":"新疆薄皮核桃",
        "gprice":"¥52.00",
        "deals":"500g/包"
      },
      { "id":12,
        "url":"http://img1.caichongwang.com/thumbs/0045783_100..jpg",
        "gname":"若羌红枣",
        "gprice":"¥49.00",
        "deals":"500g/包"
      },
      { "id":13,
        "url":"http://img1.caichongwang.com/thumbs/0049848_100..jpg",
        "gname":"新疆黑加仑葡萄干",
        "gprice":"¥52.00",
        "deals":"2包/份，400g/包"
      },
      { "id":14,
        "url":"http://img1.caichongwang.com/thumbs/0049839_100..jpg",
        "gname":"无花果干",
        "gprice":"¥69.00",
        "deals":"400克*2"
      },
      { "id":15,
        "url":"http://img1.caichongwang.com/thumbs/0033390_100..jpg",
        "gname":"新华园榴莲饼3包装",
        "gprice":"¥65.00",
        "deals":"450g/包*3"
      },
      { "id":16,
        "url":"http://img1.caichongwang.com/thumbs/0041891_100..jpg",
        "gname":"阳澄湖大闸蟹（桃李芬芳）提蟹卡",
        "gprice":"¥366.75",
        "deals":"数量8只 公蟹4.0-4.4两/只  母蟹2.8-3.2两/只"
      }
    ]
  })
})
app.get("/detail",function(req,res){
  res.json({
    "detail":[
    {   "id":1,
      "img1":"http://img1.caichongwang.com/thumbs/0022255_720.jpg",
      "img2":"http://img1.caichongwang.com/thumbs/0022257_720.jpg",
      "img3":"http://img1.caichongwang.com/thumbs/0022256_720.jpg",
      "img4":"http://img1.caichongwang.com/thumbs/0022254_720.jpg",
      "dname":"越南白肉火龙果",
      "dprice":"¥59.90",
      "dsize":"5斤/箱",
      "dsize1":"¥11.98/500g"
    },
    {   "id":2,
      "img1":"http://img1.caichongwang.com/thumbs/0033354_720..jpg",
      "img2":"http://img1.caichongwang.com/thumbs/0033355_720..jpg",
      "img3":"http://img1.caichongwang.com/thumbs/0033356_720..jpg",
      "img4":"http://img1.caichongwang.com/thumbs/0033357_720..jpg",
      "dname":"台湾进口金钻凤梨",
      "dprice":"¥69.00",
      "dsize":"2个/份 约4.5斤",
      "dsize1":"¥13.80/500g"
    },
    {   "id":3,
      "img1":"http://img1.caichongwang.com/thumbs/0022255_720.jpg",
      "img2":"http://img1.caichongwang.com/thumbs/0022257_720.jpg",
      "img3":"http://img1.caichongwang.com/thumbs/0022256_720.jpg",
      "img4":"http://img1.caichongwang.com/thumbs/0022254_720.jpg",
      "dname":"越南白肉火龙果",
      "dprice":"¥59.90",
      "dsize":"5斤/箱",
      "dsize1":"¥11.98/500g"
    },
    ]
  })
})
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
