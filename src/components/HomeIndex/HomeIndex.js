import React, { Component } from 'react';
import './HomeIndex.css'
import HeadTop from '../HeadTop/HeadTop'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// var url  = require('./HomeIndexPwd.png')

class HomeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {

    }



    render() {
        return (
           <div>
               <HeadTop/>
           </div>
        );
    }
}
;
export default HomeIndex;
