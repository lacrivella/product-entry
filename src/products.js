// import your API object
import productApi from './product-api.js';

// reference the table body DOM element
const tbody = document.getElementById('products');

const products = productApi.getAll();

// For each applicant, construct a table row and append to the table body
// Loop the list of pokemons/products
for(let i = 0; i < products.length; i++) {
    const product = products[i];
    
    // input: pokemon aka produc

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = product.name;
    tr.appendChild(nameCell);
    
    // create the table cell
    const nicknameCell = document.createElement('td');
    // create the anchor link
    const link = document.createElement('a');

    // create search param object
    const searchParams = new URLSearchParams();
    // set the nickname key with the products nickname value to avoid errord with duplicant pokemon names
    searchParams.get('nickname', product.nickname);
    // use search string to make end of link href
    link.href = 'product-detail.html?nickname' + searchParams.toString();

    // use pokemon's nickname to display text for the link
    link.textContent = product.nickname;
    // add link to the nickname cell
    nicknameCell.appendChild(link);
    // add nickname to cell to table
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

    // output: tr

    tbody.appendChild(tr);
}