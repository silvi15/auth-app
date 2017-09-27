import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../component/Header';
import Logo from '../component/Logo';
import NewProject from '../component/newProject';

export default class ProjectPage extends Component {
 constructor(props){
   super(props);
   this.state = {
     newProject: false,
     username: ''
     // de esta manera le decimos q una la clase padre con la clase hijo para hacer el submit
    };
    
  } 
 render(){
   return (
     <div>
       <Logo />
       <div className="container">
         <Header />
         <h1 className="text-center">
           My Proyects 
         </h1>
         <div className="text-justify">
            <button type="submit" className="btn btn-primary" onClick={this.props.onNewProject}>
                  <span className="glyphicon glyphicon-list-alt"></span> New Project  
            </button>
 
        </div>
       </div>
     </div>
   );
 }
}

ProjectPage.propTypes = {
 username: React.PropTypes.string
}
