const md5 = require('./md5.js')
const db = require('./db.js')
const ObjectId = require('mongodb').ObjectId;
function testTel(tel) {
	return /^1[3|4|5|7|8][0-9]{9}$/.test(tel);
}
exports.login = function (req, res, next) {
	let user = req.body.name, pwd = md5(req.body.password)
	// 根据用户名查询数据库中是否含有该用户
	db.findOne('user', {"name": user}, function (err, result) {
		if (err) {
			return res.json({
				"code": 500,
				"message": "内部服务器错误"
			})
		}

		if (!result || result.length === 0) {
			return res.json({
				"code": 401,
				"message": "找不到用户名"
			})
		}

		let dbPassword = result.password

		let id = result._id
		let expires = 60 * 60 * 24 * 30
		if (dbPassword === pwd) {

			// res.cookie('token', token, { maxAge: expires })
			// res.cookie('id', id, { maxAge: expires })
			// res.cookie('user', user, { maxAge: expires })
			return res.json({
				"code": 200,
				"message": "登录成功",
				"result": {
					user: user,
					id: id
				}
			})
		} else {
			return res.json({
				"code": 401,
				"message": "密码错误"
			})
		}
	})
}

exports.register = function (req, res, next) {

	let newData = {
		"name": req.body.name,
		"phone": req.body.phone,
		"password": md5(req.body.password),
		"img": req.body.img
	};

	// if (!testTel(req.body.phone)) {
	// 	return res.json({
	// 		"code": 401,
	// 		"message": "手机号码格式不正确"
	// 	})
	// }
	db.findOne('user', {"name": newData.name}, function (err, result) {
		console.log(result)
		if (err) {
			return res.json({
				"code": 500,
				"message": "内部服务器错误"
			})
		}
		if (result) {
			return res.json({
				"code": 401,
				"message": "用户名已经注册"
			})

		} else {
			db.insertOne('user', newData, function (err, result) {
				if (err) {
					return res.json({
						"code": 401,
						"message": "user新增失败"
					})
				}
				return res.json({
					"code": 200,
					"message": "user新增成功"
				})
			})
		}


	})

}
