import getPokedex from './get-pokedex.js';
import productApi from './product-api.js';

// selecting the correct nodes
const pokedex = document.getElementById('pokedex-info');

// adding event listeners
pokedex.addEventListener('submit', (event) => {
    event.preventDefault();
    const pokedexData = new FormData(pokedex);
    const product = getPokedex(pokedexData);
    productApi.save(product);
});