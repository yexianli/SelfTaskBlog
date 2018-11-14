var mongodb = require('mongodb');


var http = require('http');
var url = require('url');
/*get请求*/
http.createServer(function (req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "text/plain; charset=utf-8");
	console.log(req.url, "requrlrequrlrequrl")
	var params = url.parse(req.url, true).query;
	console.log(params.name, params.phone)
	const table=params.table
	const using=params.using
	if (typeof(params.phone) == "undefined") {
		console.log("undefined")
	} else {
		mongodb.MongoClient.connect("mongodb://localhost/selfBlog", function (err, db) {
			if (table==="userTable"&&using==="add") {
				console.log("符合user添加条件")
				var data = [{"name": params.name, "phone": params.phone, "password": params.password}];
				db.collection("user").insert(data, function (err, result) {
					if (!err) {
						console.log(result);
					}
				})
			}
			if(table==="userTable"&&using==="query"){
				console.log("符合user查询条件")
				data={"phone":params.phone,"password": params.password}
				db.collection("user").find(data).toArray(function(err, docs) {
					console.log(111, docs)

					res.end(JSON.stringify(docs.length))
				});
			}
			if(table==="userTable"&&using==="fileUpload"){
				const formidable = require('formidable')
				const form = new formidable.IncomingForm();   //创建上传表单
				constAVATAR_UPLOAD_FOLDER = '/avatar/'; // 上传路径
				form.encoding = 'utf-8';		//设置编辑
				form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;	 //设置上传目录
				form.keepExtensions = true;	 //保留后缀
				form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小

				form.parse(req, function (err, fields, files) {

					if (err) {
						return res.json({
							"code": 500,
							"message": "内部服务器错误"
						})
					}

					// 限制文件大小 单位默认字节 这里限制大小为2m
					if (files.fulAvatar.size > form.maxFieldsSize) {
						fs.unlink(files.fulAvatar.path)
						return res.json({
							"code": 401,
							"message": "图片应小于2M"
						})
					}

					var extName = '';  //后缀名
					switch (files.fulAvatar.type) {
						case 'image/pjpeg':
							extName = 'jpg';
							break;
						case 'image/jpeg':
							extName = 'jpg';
							break;
						case 'image/png':
							extName = 'png';
							break;
						case 'image/x-png':
							extName = 'png';
							break;
					}

					if (extName.length == 0) {
						return res.json({
							"code": 404,
							"message": "只支持png和jpg格式图片"
						})
					}

					//使用第三方模块silly-datetime
					var t = sd.format(new Date(), 'YYYYMMDDHHmmss');
					//生成随机数
					var ran = parseInt(Math.random() * 8999 + 10000);

					// 生成新图片名称
					var avatarName = t + '_' + ran + '.' + extName;
					// 新图片路径
					var newPath = form.uploadDir + avatarName;

					// 更改名字和路径
					fs.rename(files.fulAvatar.path, newPath, function (err) {
						if (err) {
							return res.json({
								"code": 401,
								"message": "图片上传失败"
							})
						}
						return res.json({
							"code": 200,
							"message": "上传成功",
							result: AVATAR_UPLOAD_FOLDER + avatarName
						})
					})
				});
			}
		})


//使用客户端连接数据，并指定完成时的回调方法
// 		MongoClient.connect(DB_CONN_STR, function(err, db) {
// 			console.log("连接成功！");
// 			//执行插入数据操作，调用自定义方法
// 			insertData(db, function(result) {
// 				//显示结果
// 				console.log(result);
// 				//关闭数据库
// 				db.close();
// 			});
// 		});

	}

}).listen(3000);