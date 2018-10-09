import React,{Component} from 'react';






class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {wechatVisible:'hidden',userName:'',password:'',state:'ok'}
	}
	componentDidMount(){

	}


	render(){
		return (
			<div>注册</div>
		);
	}
};
export default Register;
