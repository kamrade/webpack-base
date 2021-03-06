// import _ from 'lodash';
import printMe from './print.js';
import './style.scss';
import template from './view/header.pug'

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