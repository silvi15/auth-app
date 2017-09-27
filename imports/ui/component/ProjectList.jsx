import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

import Project from '../component/Project';

export default class ProjectList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                { this.props.projects.map( prj => {
                    return (
                        <Project 
                         key = { prj. id}
                         name = { prj.name }
                         description = { prj.description }
                         skills = { prj.skills }
                         days = { prj.days }
                         money = { prj.money }
                         displayName = { prj.displayName }
                         username = { prj.username }
                        />
                    );
                })}
            </div>
        );
    }
}