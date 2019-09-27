import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navigation from './components/shared/Navigation';
import HomePage from './components/homepage/home';
import RegistrationForm from './components/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <main>
          <Navbar />
          <Jumbotron />
          <Route path="/" exact component={HomePage} />
          <Route
            path="/login"
            render={() => <LoginPage baseUrl={config.url} />}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          <SecureRoute path="/profile" component={ProfilePage} />
          <Footer />
        </main>
      </div>
    )
  }
};