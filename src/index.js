// import _ from 'lodash';
import printMe from './print.js';
import './style.scss';
import template from './view/header.pug'
import $ from 'jquery';
import d3 from 'd3';

var appContainer = document.createElement('div');
appContainer.innerHTML = template();
appContainer.id = "app";
appContainer.classList.add('app');

document.body.appendChild(appContainer);

let comp = $(".app");
console.log(comp);