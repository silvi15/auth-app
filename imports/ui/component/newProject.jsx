import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'



export default class NewProject extends React.Component {
    constructor(props) {
        super(props);
    }//end constructor
    render() {
        
        return (
            <div className="container">
                <h4>New Project</h4>
                <form className="form-group" onSubmit={this.props.onSendProject} >
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" ref="nameInput" className="form-control" id="name" placeholder="Enter name" />
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" ref="descriptionInput" className="form-control" id="description" placeholder="Enter description" />
                    </div>
                    <div className="form-group">
                        <label for="name">Days</label>
                        <input type="text" ref="daysInput" className="form-control" id="days" placeholder="Enter days of work" />
                    </div>
                    <div className="form-group">
                        <label for="name">Skills</label>
                        <input type="text" ref="skillsInput" className="form-control" id="services" placeholder="Enter kind of services" />
                        <a href="#" className="badge badge-light">Add more services</a>
                    </div>
                    <div className="form-group">
                        <label form="name"> Money</label>
                        <input type="text" ref="moneyInput" className="form-control" id="money" placeholder="Enter $ " />
                    </div>
                    <button className="btn btn-primary" type='submit'>Creat</button>
                    
                </form>
            </div>
        );
    }
}