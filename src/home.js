// src/Home.js
import React from "react";
import "./index.css";
import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import fetch from 'isomorphic-fetch';
 
export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
 
  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }
 
  async login() {
    this.props.auth.login('/');
  }
 
  async logout() {
    this.props.auth.logout('/');
  }
 
  async componentDidMount() {
    this.checkAuthentication();
  }
 
  async componentDidUpdate() {
    this.checkAuthentication();
  }
 
  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <button onClick={this.logout}>Logout</button> :
      <button onClick={this.login}>Login</button>;
  }
});

export default withAuth(class MessageList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        messages: null
      }
    }
   
    async componentDidMount() {
      try {
        const response = await fetch('http://localhost:{serverPort}/api/messages', {
          headers: {
            Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
          }
        });
        const data = await response.json();
        this.setState({ messages: data.messages });
      } catch (err) {
        // handle error as needed
      }
    }
   
    render() {
      if (!this.state.messages) return <div>Loading..</div>;
      const items = this.state.messages.map(message =>
        <li key={message}>{message}</li>
      );
      return <ul>{items}</ul>;
    }
  });