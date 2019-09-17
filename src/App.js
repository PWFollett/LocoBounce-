
import React, { useState, useEffect } from 'react';
import { decode } from 'he';
import { withAuth } from '@okta/okta-react';
import { useAuth } from '/authentication';
import './App.css';

const App = withAuth(({ auth }) => {
  const [city, GetCity] = useState('');
  const [authenticated, user] = useAuth(auth);

  const fetchCity = async signal => {
    const url = new URL('(https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/)');
    if (user) {
      url.searchParams.set('firstName', user.given_name);
      url.searchParams.set('lastName', user.family_name);
    }
    const response = await fetch(url, { signal });
    const { value } = await response.json();

    GetCity(decode(value.city));


return (

  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{city || '...'}</p>
      <button className="App-link" onClick={() => GetCity('')}>
        
      </button>
      {authenticated !== null && (
        <button
          onClick={() => authenticated ? auth.logout() : auth.login()}
          className="App-link"
        >
          Log {authenticated ? 'out' : 'in'}
        </button>
      )}
    </header>
  </div>
);



export default App;