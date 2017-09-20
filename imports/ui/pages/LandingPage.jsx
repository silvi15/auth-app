import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

export default class LandingPage extends Component {
        constructor() {
                super()
        }

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
                                                        <a className="navbar-brand" href="/home">APP</a>
                                                </div>
                                                <div className="collapse navbar-collapse" id="myNavbar">
                                                        <ul className="nav navbar-nav">
                                                                <li className="active"><a href="/">Landing Page</a></li>
                                                                <li className="active"><a href="/register">Register</a></li>
                                                        </ul>
                                                        <ul className="nav navbar-nav navbar-right">
                                                                <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                                                        </ul>
                                                </div>
                                        </div>
                                </nav>
                                <div className="jumbotron">
                                        <div className="container text-center">
                                                <h1>Social App</h1>
                                                <p>Here you can find a great partner to work!</p>
                                        </div>
                                </div>
                                <div className="container-fluid bg-3 text-center">
        <h3>Easy and Fast way to creat your Proyect!</h3>
        <div className="row">
                <div className="col-sm-3">
                        <p>Create your own CardWork!</p>
                        <img src="/img/create-card-work.jpg" className="img-responsive"  alt="Image" />
                </div>
                <div className="col-sm-3">
                        <p>Find the perfect person who work with you!</p>
                        <img src="/img/find.jpg" className="img-responsive"  alt="Image" />
                </div>
                <div className="col-sm-3">
                        <p>Make a Deal!</p>
                        <img src="/img/make-deal.jpg" className="img-responsive"  alt="Image" />
                </div>
                <div className="col-sm-3">
                        <p>Creat your Networking!</p>
                        <img src="/img/make-networking.jpg" className="img-responsive"  alt="Image" />
                </div>
        </div>
</div>

</div>
                )
        }
}