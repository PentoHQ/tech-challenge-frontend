import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import auth0 from './auth0';
import AuthWrapper from './features/Auth/AuthWrapper';
import ApolloWrapper from './features/Apollo/ApolloWrapper';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0.domain}
      clientId={auth0.clientId}
      redirectUri={window.location.origin}
      audience="pento-time-track"
      cacheLocation="localstorage"
    >
      <AuthWrapper>
        <ApolloWrapper>
          <Router>
            <App />
          </Router>
        </ApolloWrapper>
      </AuthWrapper>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
