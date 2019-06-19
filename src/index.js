import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Redirector from './components/Redirect/Redirector';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Redirector} />
      <Route exact path="/sprint/:sprintno" component={ App } />
    </Switch>
      
      
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
