import React,{Component} from 'react';
import Register from '../components/Register/Register'




class IndexBox extends React.Component {
	constructor(props){
		super(props);
		this.state = {wechatVisible:'hidden',userName:'',password:'',state:'ok'}
	}
	componentDidMount(){

	}


	render(){
		return (
			<Register/>
		);
	}
};
export default IndexBox;
