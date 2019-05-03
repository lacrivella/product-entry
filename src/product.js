// import our utility object for getting data
import productApi from './product-api.js';

//reference all the DOM elements we need to update
const name = document.getElementById('name');
const nickname = document.getElementById('nickname');
const description = document.getElementById('description');
const primary = document.getElementById('primary');
const secondary = document.getElementById('secondary');
const wins = document.getElementById('wins');
const evolving = document.getElementById('evolving');

//get our applicant from our api
const product = productApi.get();

//mediate data into the elements
name.textContent = product.name;
nickname.textContent = product.nickname;
description.textContent = product.description;
primary.textContent = product.primary;
secondary.textContent = product.secondary;
wins.textContent = product.wins;
evolving.textContent = product.evolving;