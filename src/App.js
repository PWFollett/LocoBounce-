// Dependencies.
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navigation from './components/shared/Navigation';
import HomePage from './components/homepage/home';
import ProfilePage from './components/auth/ProfilePage';
import './App.css';
import '../src/components/widgets/quality/style.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';
import Qaulity from './components/widgets/quality/Quality';
import Climate from './components/widgets/climate/climate';
import Cost from './components/widgets/cost/cost';
import Education from './components/widgets/education/education';
import Lgbt from './components/widgets/lgbt/lgbt';
import Startups from './components/widgets/startups/startups';
import Salaries from './components/widgets/salaries/salaries';
import Safety from './components/widgets/safety/safety';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* App Components */}
        <Navigation />
        <Navbar />
        <Jumbotron />

        <main>
          {/* All App Widgets */}
          <Route path="/Safety" exact component={Safety} />
          <Route path="/Salaries" exact component={Salaries} />
          <Route path="/Startups" exact component={Startups} />
          <Route path="/Lgbt" exact component={Lgbt} />
          <Route path="/Education" exact component={Education} />
          <Route path="/Cost" exact component={Cost} />
          <Route path="/Climate" exact component={Climate} />
          <Route path="/Qaulity" exact component={Qaulity} />
          <Route path="/" exact component={HomePage} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <SecureRoute path="/profile" component={ProfilePage} />
          <Footer />
        </main>
      </div>
    )
  }
};