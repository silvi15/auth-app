import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'
import styles from './ProfileBar.css'

export default class ProfileBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="navbar navbar-toggleable-md navbar-light bg-faded">
                <figure>
                    <img className={styles.avatar} src={this.props.picture} />             
                </figure>
                <span className={styles.username}>Hola @{this.props.username}!</span>
            </div>
        )
    }
}