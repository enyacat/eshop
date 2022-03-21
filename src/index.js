import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './store/reducer';
import { StateProvider, UserAuthContextProvider } from './store/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
