import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'uuid';


import ProjectList from '../component/ProjectList';
import NewProject  from '../component/newProject';

export default class MainPage extends Component {
  constructor() {
    super();
    //atributos
    this.state = {
      NewProject: false,
      projects: [{
        id: uuid.v4(),
        name: 'blog',
        description: 'Tourism around the world',
        skills: 'android, ios, ',
        days: '10',
        money: '$300',
        displayName: 'silvi.troncoso@gmal.com',
        username: 'Silvina Laura Troncoso'
        //date: date.now()
      },
      {
        id: uuid.v4(),
        name: 'ecommers',
        description: 'Tourism around the world',
        skills: 'android, ios, ',
        days: '10',
        money: '$300',
        displayName: 'Silvina Laura Troncoso',
        username: 'silvi.troncoso@gmail.com'
        //date: date.now()
      }]
    }
    //bindiar las funciones en el constructro, son metodos
    this.handleNewProject= this.handleNewProject.bind(this);
    this.handleSendProject = this.handleSendProject.bind(this); 
  }
  handleSendProject(event){
    event.preventDefaut();
    let newProject ={
      id: uuid.v4(),

    }
  }

  handleNewProject(event) {
    event.preventDefaut();
    this.setState({
      NewProject: true
    });
  }
  // cdo hacemos click nos renderiza el elemento
  
  renderNewProject() {
    if (this.state.NewProject) {
      return <NewProject
        onSendText={this.handleNewProject}
       />
    }
  }

  /**
   * <div>
          <div className="container">
            <h1 className="text-center">
              {loggedIn ? 'Welcome ' + currentUser.username : ''}
            </h1>
          </div>
          <ProjectList projects={this.state.projects} />
        </div>
        //para poner un nuevo mensaje

  //me tira el form de un newProject
  <NewProject onNewProject={this.handleNewProject.bind(this)}/>

        */
  render() {
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
        
        
        <button type="submit" className="btn btn-primary" onClick={this.props.NewProject}>
          <span className="glyphicon glyphicon-list-alt"></span> New Project
        </button>
        {this.renderNewProject()}
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}

MainPage.propTypes = {
  username: React.PropTypes.string
}

