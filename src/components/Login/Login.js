import React,{Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
// var url  = require('./loginPwd.png')

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

    }


    render() {
        return (

                <div><Link to="/register">去注册</Link></div>


    );
    }
    };
    export default Login;
