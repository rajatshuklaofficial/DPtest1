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

class user extends Component{
	constructor(){
		super();
		this.state={
			users:[],
			errors:{},
			redirectlink:null,
		}
		this.onChange=this.onChange.bind(this);
	}
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then((res)=>{console.log(res.data)
				this.setState({users:res.data})
			})
		.catch(err=>console.log(err));
		
	}
	onChange(e){
		this.setState({[e.target.name]:e.target.value});
	}
	redirectToPost=(e)=>{
		this.setState({redirectlink:'post'+'/'+'&'+ e.id+'&'+e.username})
	}
	 render(){
	 	if(this.state.redirectlink){
	 		return <Redirect to = {this.state.redirectlink}/>
	 	}else{	
		 	return(
		 		<div className="user">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-8 m-auto">
			          <h1 className="display-4 text-center">All users</h1>
			          <p className="lead text-center">Click on any user to see Posts by user</p>
			          {
				          this.state.users.map((user,index)=>(
				          	<div key={index} style={DesktopStyles.mainDiv} onClick={()=>{this.redirectToPost(user)}}>
					          	<div style = {DesktopStyles.subDiv}>
					          		Id: {user.id} || Name: {user.name} || Usename: {user.username} || Phone: {user.phone}
					          	</div>
					          	<div style = {DesktopStyles.subDiv}>
					          		Address: {user.address.street} , {user.address.suite} , {user.address.city} ,{user.address.zipcode} ,Geo-lat: {user.address.geo.lat} , Geo-long: {user.address.geo.lng}
					          	</div>
					          	<div style ={DesktopStyles.subDiv}>
					          		Company: {user.company.name} || BS: {user.company.bs} || CatchPhrase : {user.company.catchPhrase}
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
}
export default user;