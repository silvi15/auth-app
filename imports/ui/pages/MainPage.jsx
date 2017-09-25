import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//import component
import Header from '../component/Header';
import Logo from '../component/Logo';
//import ProfileBar from '../component/ProfileBar';

//import ProjectList from '../component/ProjectList';
//<ProjectList projects={this.state.projects} />
export default class MainPage extends Component {
 constructor(props){
   super(props);  
 }

 render(){
   let currentUser = this.props.currentUser;
   let userDataAvailable = (currentUser !== undefined);
   let loggedIn = (currentUser && userDataAvailable);
   return (
     <div>
       <Logo />
       
       <div className="container">
         <Header />
         <h1 className="text-center">
           { loggedIn ? 'Welcome '+currentUser.username : '' }
         </h1>
         </div>
          
     </div>  
   );
 }
}

MainPage.propTypes = {
 username: React.PropTypes.string
}
