
import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback, Auth } from '@okta/okta-react';
import Home from '/home';
import Protected from './Protected';
import { createBrowserHistory } from 'history'
 
const history = createBrowserHistory();
 
const auth = new Auth({
  history,
  issuer: 'https://{outlook-pwf592110.okta.com}.com/oauth2/default',
  clientId: '{clientId}',
  redirectUri: window.location.origin + '/implicit/callback',
});
 
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Security auth={auth} >
          <Route path='/' exact={true} component={Home}/>
          <SecureRoute path='/protected' component={Protected}/>
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}
 
export default App;