import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

import Header from '../component/Header';
import Logo from '../component/Logo';

//<li className="active"><a href="/editProfile">Edit Profile</a></li>
export default class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }; 
    }    
    render() {
        let currentUser = this.props.currentUser;
        let userDataAvailable = (currentUser !== undefined );
        let loggedIn = (currentUser && userDataAvailable);
            return (
                <div>
                    <Logo />
                  <div className="container">
                      <Header />
                      <h1 className="text-center">
                        profile{ loggedIn ? 'Welcome'+ currentUser.username : '' }
                    </h1>
                    </div>
                </div>  
                );
        } 
    }
    ProfilePage.propTypes = {
        username: React.PropTypes.string
       }
       