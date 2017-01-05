import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/App.jsx';
import Api from './api-component/Api.jsx';
import Datasets from './datasets-component/Datasets.jsx';
import Code from './components/Code.jsx';
import Home from './components/Home.jsx';
require('./css/app.scss');


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/api" component={Api}/>
        <Route path="/datasets" component={Datasets}/>
        <Route path="/plugins" component={Code}/>
    </Route>
  </Router>
), document.getElementById('app'));
