import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../component/Header';
import Logo from '../component/Logo';

export default class ProjectPage extends Component {
 constructor(props){
   super(props);
   this.state = {
     username: ''
   };
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
           Proyect { loggedIn ? 'Welcome '+currentUser.username : '' }
         </h1>
       </div>
     </div>
   );
 }
}

ProjectPage.propTypes = {
 username: React.PropTypes.string
}
