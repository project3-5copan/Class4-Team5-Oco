import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
/**
 * https://stackoverflow.com/questions/56707885/browserrouter-vs-router-with-history-push
 * 
 * BrowserRouter ignores the history prop as it handles the history automatically for you.
 * If you need access to the history outside of a react component, then using Router should be fine.
 */
import App from './App';
import { Provider } from "react-redux";
import store from "./utils/store";
import history from "./utils/history";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
