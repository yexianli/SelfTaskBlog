import React, { Component } from 'react';
import './HeadTop.css'

import { BrowserRouter, Route, Link } from 'react-router-dom'
// var url  = require('./HeadTopPwd.png')

class HeadTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

    }



    render() {
        return (
            <div><button>博客</button><Link to="/writeBlog"><button>写博客</button></Link></div>
        );
    }
}
;
export default HeadTop;
