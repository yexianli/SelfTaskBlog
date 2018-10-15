import React,{Component} from 'react';
import './Login.css'
import loginPwd from "./loginPwd.png"
import msgPng from './msg.png'
import userNamePng from './userName.png'
import pwdPng from './pwd.png'
import { BrowserRouter, Route,Link} from 'react-router-dom'
// var url  = require('./loginPwd.png')

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonVerStyle:"#00FF66",
            flag:0
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="wrap">
            <div className="login">
                <div className="loginBar">
                    <ul>
                        <li className="loginInput"><img src={msgPng}/><input type="text" className="text" placeholder="请输入手机号"/></li>
                        <li><img src={pwdPng}/><input type="password" className="psd" placeholder="请输入密码"/> </li>

                    </ul>
                </div>
                {/*<Link to="/login" >去登陆</Link>*/}
                {/*<Route path="/login" component={Login} />*/}
             <div className="btn"><button>登录</button><Link to="/register"><button>注册</button></Link></div>
            </div>
            </div>
    );
    }
    };
    export default Login;
