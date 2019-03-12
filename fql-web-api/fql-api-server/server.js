var express = require('express');
const  path = require("path");
var app = express();
app.use(express.static(path.resolve(__dirname,"../")));
var allowCrossDomain = function (req, res, next) {//设置response头部的中间件
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
    next();
};
app.use(allowCrossDomain);

// index返回的json
app.get("/data/index", function (req, res) {
    var data = require('./data/index');//要获取的json文件
    res.send(data);
})
// fenlei返回的json
app.get("/data/fenlei", function (req, res) {
    var data = require('./data/fenlei');//要获取的json文件
    res.send(data);
})
// goodslist返回的json
app.get("/data/goods", function (req, res) {
    var data = require('./data/goods');//要获取的json文件
    res.send(data);
})

// Datails返回的json
// app.get("/vue-cli-server/data/Details", function (request, response) {
//     var data = require('./data/Details.json');//要获取的json文件
//     response.send(data);
// })

app.listen(3000, function () {
    console.log('listening on 3000')
});