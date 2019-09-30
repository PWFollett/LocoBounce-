// Dependencies.
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navigation from './components/shared/Navigation';
import HomePage from './components/homepage/home';
import ProfilePage from './components/auth/ProfilePage';
import './App.css';
import '../src/components/widgets/quality/style.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';
import Teleport from "../src/components/Teleport/index";

export default class App extends Component {
  state = {
    url: ''
  }
  render() {
    return (
      <div className="App">
        {/* App Components */}
        <Navigation />
        <Navbar />
        <Jumbotron />

        <main>
          {/* All App Widgets */}
          <Switch>
            <Route path="/Safety" exact render={() => <Teleport src="https://teleport.org/cities/aarhus/widget/crime/?currency=USD" />} />
            <Route path="/Salaries" exact render={() => <Teleport src="https://teleport.org/cities/aarhus/widget/salaries/?currency=USD" />} />
            <Route path="/Startups" exact render={() => <Teleport src="https://teleport.org/cities/aarhus/widget/startup/?currency=USD" />} />
            <Route path="/Lgbt" exact render={() => <Teleport src="https://teleport.org/cities/aarhus/widget/tolerance/?currency=USD" />} />
            <Route path="/Education" exact render={() => <Teleport src="https://teleport.org/cities/aarhus/widget/education/?currency=USD" />} />
            <Route path="/Cost" exact render={() => <Teleport src="https://teleport.org/cities/aarhus/widget/costs/?currency=USD" />} />
            <Route path="/Climate" exact render={() => <Teleport src="https://teleport.org/cities/aarhus/widget/weather/?currency=USD" />} />
            <Route path="/Qaulity" exact render={() => <Teleport src="https://teleport.org/cities/aarhus/widget/scores/?currency=USD" />} />

            <Route path="/implicit/callback" component={ImplicitCallback} />
            
            <SecureRoute path="/profile" component={ProfilePage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
          <Footer />
        </main>
      </div>
    )
  }
};