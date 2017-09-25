import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

export default class Logo extends React.Component {
    render() {
            return (
                <div>
                     <nav className="navbar navbar-inverse">
                                        <div className="container-fluid">
                                        <div className="navbar-header">
                                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                                                <span className="icon-bar"></span>
                                                                <span className="icon-bar"></span>
                                                                <span className="icon-bar"></span>
                                                        </button>
                                                        <a className="navbar-brand" href="/">App</a>
                                                </div>
                                                <div className="collapse navbar-collapse" id="myNavbar">
                                                        <ul className="nav navbar-nav">
                                                                <li className="active"><a href="/logout">Logout</a></li>

                                                        </ul>
                                                        
                                                </div>
                                        </div>
                                </nav>
                </div>
            );
    }
}