import React,{Component} from 'react';
import './Register.css'


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li><img src="images/login_user.png"><input type="text" class="text" placeholder="请输入用户名"/></li>
                        <li><img src="images/login_pwd.png"><input type="password" class="psd" placeholder="请输入确认密码"/>
                        </li>
                    </ul>
                </div>
            </div>
    );
    }
    };
    export default Register;
