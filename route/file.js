
exports.upload = function(req, res, next){
         var fs=require("fs")
		console.log("到上传文件这里")
		const formidable = require('formidable')
		const form = new formidable.IncomingForm();   //创建上传表单
		const AVATAR_UPLOAD_FOLDER = '/avatar/'; // 上传路径
		form.encoding = 'utf-8';		//设置编辑
		form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;	 //设置上传目录
		form.keepExtensions = true;	 //保留后缀
		form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小

		form.parse(req, function (err, fields, files) {

			if (err) {
				console.log(err)
				return 1
			}

			// 限制文件大小 单位默认字节 这里限制大小为2m
			// if (files.fulAvatar.size > form.maxFieldsSize) {
			// 	fs.unlink(files.fulAvatar.path)
			// 	return 2
			// }

			var extName = '';  //后缀名
			console.log(files.fulAvatar.type)
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
				case 'application/x-msdownload':
					extName = 'exe';
					break;
				case 'application/zip':
					extName = 'zip';
					break;

			}

			if (extName.length == 0) {
				return 3
			}

			//使用第三方模块silly-datetime
			var sd=require("silly-datetime")
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
					return 4
				}
				return 5
			})
			res.end(newPath)
		});


};

exports.download = function(req, res){

	var path = req.query.path;  // 文件存储的路径
    path=path.replace(/\"/g, "");
	// filename:设置下载时文件的文件名，可不填，则为原名称
	res.download(path);

};
