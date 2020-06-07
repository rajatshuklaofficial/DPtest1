import React ,{Component} from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';


const DesktopStyles ={
		mainDiv:{
			height:'auto',
			borderRadius:'8px',
			padding : '10px',
			borderStyle: 'solid',
 		    borderColor: 'coral',
 		    marginBottom:'10px'
		},
		subDiv:{
			height:'auto',
			width: '100%',
			backgroundColor:'#e6f2ff',
			marginBottom:'10px',
			borderRadius:'4px',
			padding:'5px',
		}
	}

class post extends Component{
	constructor(){
		super();
		this.state={
			posts:[],
			errors:{},
			redirectlink:null,
			username:''
		}
		this.onChange=this.onChange.bind(this);
	}
	componentDidMount(){
		console.log(this.state.posts)
		const arr=window.location.pathname.split('&')
		this.setState({username:arr[2]})
		const url = 'https://jsonplaceholder.typicode.com/posts?userId='+arr[1]
		axios.get(url)
		.then((res)=>{console.log(res.data)
				console.log("bckjbkvjb")
				this.setState({posts:res.data})
			})
		.catch(err=>console.log(err));
	}
	onChange(e){
		this.setState({[e.target.name]:e.target.value});
	}
	redirectToPost=(e)=>{
		this.setState({redirectlink:'user'+'/'+ e})
	}
	 render(){
		 	return(
		 		<div className="user">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-8 m-auto">
			          <h1 className="display-4 text-center">All Posts by {this.state.username}</h1>
			          {(this.state.posts.length == 0)?
			          	<p className="lead text-center">Please wait or refresh .....</p>
			          	:
				          this.state.posts.map((user,index)=>(
				          	<div key={index} style={DesktopStyles.mainDiv}>
					          	<div style = {DesktopStyles.subDiv}>
					          		<b>Tiltle:{user.title}</b>
					          	</div>
					          	<div style = {DesktopStyles.subDiv}>
					          		Body: {user.body}
					          	</div>
				          	</div>
				          ))

			          }
			        </div>
			      </div>
			    </div>
			  </div>

	 		)
	 }
}
export default post;