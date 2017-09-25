import React, { Component } from 'react';
import { withHistory } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';
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
    return { isAuthenticated: Meteor.userId() !== null };
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
/**
 * 
 * <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Auth App</a>
            </div>
            <div className="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.logout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
 */
  render(){
    return (
      <div>
        
        <MainContainer />
      </div>
    );
  }
}
