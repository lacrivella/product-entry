// import your API object
import productApi from './product-api.js';

// reference the table body DOM element
const tbody = document.getElementById('products');

const products = productApi.getAll();

// For each applicant, construct a table row and append to the table body
// Loop the list of applicants
for(let i = 0; i < products.length; i++) {
    const product = products[i];
    
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = product.name;
    tr.appendChild(nameCell);

    const nicknameCell = document.createElement('td');
    nicknameCell.textContent = product.nickname;
    tr.appendChild(nicknameCell);

    const primaryCell = document.createElement('td');
    primaryCell.textContent = product.primary;
    tr.appendChild(primaryCell);

    const secondaryCell = document.createElement('td');
    let secondaryType = '';
    if(product.secondary) {
        secondaryType = product.secondary.join(', ');
    }
    secondaryCell.textContent = secondaryType;
    tr.appendChild(secondaryCell);

    const winsCell = document.createElement('td');
    winsCell.textContent = product.wins;
    tr.appendChild(winsCell);

    const evolvingCell = document.createElement('td');
    evolvingCell.textContent = product.evolving;
    tr.appendChild(evolvingCell);

    tbody.appendChild(tr);
}