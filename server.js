var express = require('express');
var bodyParser = require('body-parser');//body-parser中间件来解析请求体
var app = express();


var allowCrossDomain = function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
	next();
};

app.use(allowCrossDomain);//运用跨域的中间件
app.use(bodyParser.text());//运用中间件，对请求体的文本进行解析

app.get('/test', function(req, res){
	res.send('hello world');
});
var file = require("./route/file.js");  //此时，route.js与file.js处于同个目录下

app.post('/fileUpload', file.upload);
app.get('/download', file.download);

app.listen(3000);