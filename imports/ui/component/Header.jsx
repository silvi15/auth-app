import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

export default class Header extends React.Component {
    render() {
            return (
                <div className="container">
                <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                    <a href="/" type="button" className="btn btn-secondary">
                        <span className="glyphicon glyphicon-home"></span>
                    </a>
                    <a href="/inbox" type="button" className="btn btn-secondary">
                        <span className="glyphicon glyphicon-envelope"></span>
                    </a>
                    <a href="/findPeple" type="button" className="btn btn-secondary">
                        <span className="glyphicon glyphicon-search"></span>
                    </a>
                    <a href="/project" type="button" className="btn btn-secondary">
                        <span className="glyphicon glyphicon-briefcase"></span>
                    </a>
                    <a href="/notification" type="button" className="btn btn-secondary">
                        <span className="glyphicon glyphicon-bell"></span>
                    </a>
                    <a href="/profile" type="button" className="btn btn-secondary" >
                        <span className="glyphicon glyphicon-user"></span>
                    </a>
                </div>
            </div>                
            )
        }
    }
    