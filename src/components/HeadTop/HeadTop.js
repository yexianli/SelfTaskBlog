import React, { Component } from 'react';
import './HeadTop.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// var url  = require('./HeadTopPwd.png')
import WriteBlog from '../WriteBlog/WriteBlog'
class HeadTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}

	}

	componentDidMount() {

	}


	render() {
		return (
			<div>
				<div className="header">
					<Link to="/writeBlog">写博客</Link>
					<Link to={`${match.url}/one`}>one</Link>
					<Link to={`${match.url}/two`}>two</Link>
				</div>
			</div>

<<<<<<< HEAD
		);
	}
=======
    render() {
        return (
            <div><button>博客</button><Link to="/writeBlog"><button>写博客</button></Link></div>
        );
    }
>>>>>>> 4d81f796cb07ad44f181bfbc51eb195631cafb49
}
;
export default HeadTop;
