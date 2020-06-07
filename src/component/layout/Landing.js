import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component{
	render(){
		return(
		<div className="landing">
		    <div className="dark-overlay landing-inner text-light">
		      <div className="container">
		        <div className="row">
		          <div className="col-md-12 text-center">
		            <h1 className="display-3 mb-4">Landing Page
		            </h1>
		            <p className="lead">This is Basic Landing Page ,click on All users to see all users</p>
		            <hr />
		            <Link to="/user" className="btn btn-lg btn-light">All users</Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  )
	}
}

export default Landing;