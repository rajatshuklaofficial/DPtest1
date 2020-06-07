import React ,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Footer from './component/layout/Footer';
import post from './component/userandpost/post';
import user from './component/userandpost/user';
import JobDetailsform from './component/JobDetailsForm/JobDetailsform';

class App extends Component {
  render(){
  return (
    <Router>
    <div className="App"> 
    <Navbar />
      <Route exact path="/" component={Landing} />
      <div className="container">
      <Route exact path="/post/:id" component={post}/>
      <Route exact path="/user" component={user}/>
      <Route exact path="/JobDetaisform" component={JobDetailsform}/>
      </div>
      <Footer />
    </div>
    </Router>
  );
 }
}

export default App;
