import React, { Component } from 'react';
import './Register.css'
import loginPwd from "./loginPwd.png"
import msgPng from './msg.png'
import userNamePng from './userName.png'
import pwdPng from './pwd.png'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { fetch as fetchPolyfill } from 'whatwg-fetch'
// var url  = require('./loginPwd.png')

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonVerStyle: "#00FF66",
			buttonVerContent: "获取验证码",
			flag: 0
		}
		this.buttonVerClick = this.buttonVerClick.bind(this)
		this.btnRegister = this.btnRegister.bind(this)
	}

	componentDidMount() {

	}

	buttonVerClick() {

		const _this = this
		console.log(_this, "_this")
		console.log("点击")
		let sum = 60

		if (this.state.flag === 1) {
			return
		}
		_this.setState({buttonVerContent: `60秒后重试`})

		var varInterval = setInterval(function () {
			sum = sum - 1
			_this.setState({flag: 1}, () => {


			});
			_this.setState({buttonVerContent: `${sum}秒后重试`}, () => {

			});
			if (sum === 1) {
				clearInterval(varInterval)
				setTimeout(function () {
					_this.setState({buttonVerContent: `获取验证码`}, () => {
					});
					_this.setState({flag: 0}, () => {


					});
					clearInterval(varInterval)
				}, 1000)

			}
		}, 1000)

	}

	btnRegister() {
		let rUsrName = this.refs.rUserName.value
		let rPhone = this.refs.rPhone.value
		let rPassword = this.refs.rPassword.value
		let repeatPassword = this.refs.repeatPassword.value
		console.log(this.refs.rUserName.value, "注册用户名")
		fetch(`http://localhost:3000?table=userTable&using=add&name=${rUsrName}&phone=${rPhone}&password=${rPassword}`)
			.then(function (response) {
				console.log(response.text())
				// return response.text()
			}).then(function (body) {
			console.log(222222)
		})
	}

	render() {
		return (
			<div className="wrap">
				<div className="regiser">
					<div className="regiserBar">
						<ul>
							<li><img src={userNamePng}/><input type="text" className="text" placeholder="请输入用户名"
							                                   ref="rUserName"/></li>
							<li><img src={msgPng}/><input type="text" className="text" placeholder="请输入手机号"
							                              ref="rPhone"/><span onClick={this.buttonVerClick}
							                                                  style={{color: this.state.buttonVerStyle}}
							                                                  className="verCode">{this.state.buttonVerContent}</span>
							</li>
							<li><img src={pwdPng}/><input type="password" className="psd" placeholder="请输入密码"
							                              ref="rPassword"/></li>
							<li><img src={pwdPng}/><input type="password" className="psd" placeholder="请确认密码"
							                              ref="repeatPassword"/></li>
						</ul>
					</div>
					{/*<Link to="/login" >去登陆</Link>*/}
					{/*<Route path="/login" component={Login} />*/}
					<div className="btn">
						<button onClick={this.btnRegister}>注册</button>
						<Link to="/login">
							<button>已有账号，立即登录</button>
						</Link></div>
				</div>
			</div>
		);
	}
}
;
export default Register;
