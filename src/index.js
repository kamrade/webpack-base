// import _ from 'lodash';
import printMe from './print.js';
import './style.scss';
import template from './view/header.pug';
import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  Link,
  Navigation,
  browserHistory,
  hashHistory } from 'react-router';

// templates ------------------------------------

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = 'Hello, webpack <br>';
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

var element = component(); // Store the elementto re-render on print.js changes
document.body.appendChild(element);

var appContainer = document.createElement('div');
appContainer.innerHTML = template();
appContainer.classList.add('app-container');
document.body.appendChild(appContainer);

var reactApp = document.createElement('div');
reactApp.id = "app";
reactApp.classList.add('app');
document.body.appendChild(reactApp);

// test jquery
let $hello = $(".hello");
$hello.css("background", "#333");
$hello.css("color", "#fff");

// react ------------------------------------

ReactDOM.render(
  <h2> Hello, world Again</h2>,
  document.getElementById('app')
);