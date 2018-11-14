import React, {} from 'react';
import { Route, Link } from 'react-router-dom';
// import Login from '../components/Login/Login'
// import Register from "../components/Register/Register";
// import WriteBlog from "../components/WriteBlog/WriteBlog";
// import Blog from "../components/Blog/Blog";
import HomeIndex from "../components/HomeIndex/HomeIndex";

const IndexBox = () => (
	<div>
		{/*<ul>*/}
			{/*<li>*/}
				{/*<Link to="/home">Home</Link>*/}
			{/*</li>*/}
		{/*</ul>*/}

		{/*<hr />*/}

		<HomeIndex/>
	</div>
);
// class IndexBox extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {wechatVisible: 'hidden', userName: '', password: '', state: 'ok'}
// 	}
//
// 	componentDidMount() {
// 	}
//
// 	render() {
// 		return (
// 			<div>
// 				<Route path="/" render={() => <div>Home</div>}/>
// 				<Route path="/home" component={HomeIndex}/>
// 				{/*<Route path="/login" component={Login}/>*/}
// 				{/*<Route path="/register" component={Register}/>*/}
// 				{/*<Route path="/writeBlog" component={WriteBlog}/>*/}
// 			</div>
// 		);
// 	}
// };
export default IndexBox;
