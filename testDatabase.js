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