import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import HeaderLanding from '../component/HeaderLanding';

export default class LandingPage extends React.Component {
        render() {
                return (
                        <div>
                           <HeaderLanding />    
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
                                                        <img src="/img/create-card-work.jpg" className="img-responsive" alt="Image" />
                                                </div>
                                                <div className="col-sm-3">
                                                        <p>Find the perfect person who work with you!</p>
                                                        <img src="/img/find.jpg" className="img-responsive" alt="Image" />
                                                </div>
                                                <div className="col-sm-3">
                                                        <p>Make a Deal!</p>
                                                        <img src="/img/make-deal.jpg" className="img-responsive" alt="Image" />
                                                </div>
                                                <div className="col-sm-3">
                                                        <p>Creat your Networking!</p>
                                                        <img src="/img/make-networking.jpg" className="img-responsive" alt="Image" />
                                                </div>
                                        </div>
                                </div>

                        </div>
                )
        }
}
