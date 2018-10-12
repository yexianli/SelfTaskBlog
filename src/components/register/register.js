import React,{Component} from 'react';
import './Register.css'
import loginPwd from "./loginPwd.png"
import msgPng from './msg.png'
import userNamePng from './userName.png'
import pwdPng from './pwd.png'
import { BrowserRouter, Route,Link} from 'react-router-dom'
// var url  = require('./loginPwd.png')

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonVerStyle:"#00FF66",
            buttonVerContent:"获取验证码",
            flag:0
        }
        this.buttonVerClick=this.buttonVerClick.bind(this)
    }

    componentDidMount() {

    }
    buttonVerClick(){

        const _this=this
        console.log(_this,"_this")
        console.log("点击")
        let sum=60

      if(this.state.flag===1){
          return
      }
        _this.setState({buttonVerContent:`60秒后重试`})

        var  varInterval=setInterval(function () {
            sum=sum-1
            _this.setState({flag:1}, () => {


            });
            _this.setState({buttonVerContent:`${sum}秒后重试`}, () => {

            });
            if(sum===1){
                clearInterval(varInterval)
                setTimeout(function () {
                    _this.setState({buttonVerContent:`获取验证码`}, () => {
                    });
                    _this.setState({flag:0}, () => {


                    });
                    clearInterval(varInterval)
                },1000)

            }
        },1000)

    }

    render() {
        return (
            <div className="wrap">
            <div className="login">
                <div className="loginBar">
                    <ul>
                        <li><img src={userNamePng}/><input type="text" className="text" placeholder="请输入用户名"/></li>
                        <li><img src={msgPng}/><input type="text" className="text" placeholder="请输入手机号"/><span onClick={this.buttonVerClick} style={{color:this.state.buttonVerStyle}} className="verCode">{this.state.buttonVerContent}</span></li>
                        <li><img src={pwdPng}/><input type="password" className="psd" placeholder="请输入密码"/> </li>
                        <li><img src={pwdPng}/><input type="password" className="psd" placeholder="请确认密码"/> </li>
                    </ul>
                </div>
                {/*<Link to="/login" >去登陆</Link>*/}
                {/*<Route path="/login" component={Login} />*/}
             <div className="btn"><button>注册</button><Link to="/login"><button>已有账号，立即登录</button></Link></div>
            </div>
            </div>
    );
    }
    };
    export default Register;
