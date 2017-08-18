// import _ from 'lodash';
import printMe from './print.js';
import './style.scss';
import template from './view/header.pug';

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, Navigation, browserHistory, hashHistory } from 'react-router';



// render template from jade file
var appContainer = document.createElement('div');
appContainer.innerHTML = template();
appContainer.classList.add('app-container');
document.body.appendChild(appContainer);

// create react container
var reactApp = document.createElement('div');
reactApp.id = "app";
reactApp.classList.add('app');
document.body.appendChild(reactApp);

// react ------------------------------------

ReactDOM.render(
  <h2> Hello, from react</h2>,
  document.getElementById('app')
);