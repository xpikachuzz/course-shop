import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ScrollToTop } from './components';
import { Provider } from "react-redux"

import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store/store';
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="452344827724-1rges3jm4jid0l5a7dghklqd69v04hgv.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

