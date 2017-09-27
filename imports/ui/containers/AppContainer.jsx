import React, { Component } from 'react';
import { withHistory } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';

import Logo from '../component/Logo';
import Header from '../component/Header';
/* 
-AppContainer clase padre 
-Funciones para validar los usuarios
*/
export default class AppContainer extends Component {
  /* llamamos a este metodo cdo se crea un componente y se inserta en el DOM */
    constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
    
  }

  getMeteorData(){
    return {
      onNewProject: false,
      isAuthenticated: Meteor.userId() !== null 
    };
  }
  /* llamamos a este metodo cdo se crea un componente y se inserta en el DOM */
  componentWillMount(){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/landingPage');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      this.props.history.push('/landingPage');
    }
  }

  logout(e){
    e.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            this.props.history.push('/landingPage');
        }
    });
  }
    render(){
    return (
      <div>
        <Logo />
        <Header />
        <MainContainer getMeteorData={this.state.getMeteorData} />
      </div>
    );
  }
}
