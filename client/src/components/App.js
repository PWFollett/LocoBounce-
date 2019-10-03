// src/components/App.js
import React, {
  Component,
  Fragment
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import AppProvider, {
  Consumer
} from './AppProvider';
import Login from './Login';
import Signup from './Signup';
import Navbar from '../components/Navbar/index';
import FlashMessage from '../components/FlashMessage';
import Teleport from "../components/Teleport/index";
import Jumbotron from './Jumbotron';
import AlertSignedOut from './alert-signed-out/AlertSignedOut.js'
import AlertAccountCreated from './alert-account-created/AlertAccountCreated';
import HomePage from '../components/HomePage/Home';
import City from "./pages/City";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AppProvider>
          <Router>
            <Fragment>
              <Navbar />
              <FlashMessage />

              <Route exact path="/" component={() => <Jumbotron />} />
              <Switch>
                  <Route exact path="/citylist" component={City} />
                  <Route path="/Safety" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/crime/?currency=USD" />} />
                  <Route path="/Salaries" exact render={() => <Teleport src="https://teleport.org/cities/pittsburgh/widget/salaries/?currency=USD" />} />
                  <Route path="/Startups" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/startup/?currency=USD" />} />
                  <Route path="/Lgbt" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/tolerance/?currency=USD" />} />
                  <Route path="/Education" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/education/?currency=USD" />} />
                  <Route path="/Cost" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/costs/?currency=USD" />} />
                  <Route path="/Climate" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/weather/?currency=USD" />} />
                  <Route path="/Qaulity" exact render={() => <Teleport src="https://teleport.org/cities/philadelphia/widget/scores/?currency=USD" />} />
                </Switch>
              <HomePage />

              <Route exact path="/login" component={() => <Login />} />
              <Route exact path="/signup" component={() => <Signup />} />
              <Router exact path="/dashboard" component={() => <Consumer>

                {
                  ({ state }) => state.currentUser ?
                    <h1 className="content">Protected dashboard!</h1> :
                    <div className="content">
                      <h1>Access denied.</h1>
                      <p>You are not authorized to access this page.</p>
                    </div>
                }
              </Consumer>} />
              <Route exact path="/signedOut" component={() => <AlertSignedOut />} />

              <Route exact path="/accountCreated" component={() => <AlertAccountCreated />} />

            </Fragment>
          </Router>
        </AppProvider>
      </div>
    );
  }
}