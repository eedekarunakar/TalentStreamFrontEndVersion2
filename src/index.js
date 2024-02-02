import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import { LinkedInOAuthProvider } from 'react-linkedin-login-oauth2'; // Import LinkedInOAuthProvider
import { LinkedIn, LinkedInOAuthProvider  } from 'react-linkedin-login-oauth2';

// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <BrowserRouter> */}
    <GoogleOAuthProvider clientId="33884279909-pupqt6eev817ebnudqfgar1ei8bqtbck.apps.googleusercontent.com">
    <LinkedIn clientId="86eeewes5839tw">
    <App />
    </LinkedIn>
    </GoogleOAuthProvider>
     {/* </BrowserRouter> */}
  </React.StrictMode>
);

reportWebVitals();
