import React, { Component } from 'react';
import { withhistory } from 'react-router-dom';
import MainContainer from './MainContainer.jsx';

export default class HeaderLandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="jumbotron">
                <div class="container text-center">
                    <h1>Social App</h1>
                    <p>Here you can find a great partner to work!</p>
                </div>
            </div>
        );
    }

}//end class