import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

export default class Project extends React.Component {
    constructor(props) {
        super(props);
    }//end constructor
    render() {
       // let dateFormat = moment(this.props.date).fromNow();
        return (
            <div className={root}>
                <div className={user}>
                    <figure>
                        <img className={avatar} src={this.props.picture} />
                    </figure>
                    <span className={displayName}>{this.props.displayName}</span>
                    <span className={username}>{this.props.username}</span>
                    <span className={date}>{dateFormat}</span>
                </div>
            </div>
            <div>
                    <h4>Project</h4>
                    <div className="rp bra brb agk">
                        <div className="rp bra brb agk">
                            <div className="rq">
                                <ul className="dc ayn">
                                    <li> <span className="glyphicon glyphicon-list-alt"> </span> <label> Blog </label> </li>
                                    <a href="/profile"> From </a> <label> {this.props.username} </label>
                                    <p> {this.props.description} </p>
                                    <p><span className="glyphicon glyphicon-wrench"> </span> <label> Skills </label>
                                        <button type="button" className="btn btn-link">{this.props.services}</button>
                                    </p>
                                    <p>
                                        <button type="button" className="btn btn-secondary">
                                            <span className="glyphicon glyphicon-euro"> {this.props.money} </span>
                                        </button>
                                        <button type="button" className="btn btn-secondary">
                                            <span className="glyphicon glyphicon-calendar"> {this.props.days} </span>
                                        </button>
                                        <a href="/acceptProject" type="button" className="btn btn-primary">Postulate</a>
                                    </p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}