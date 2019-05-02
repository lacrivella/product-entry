import productApi from '../src/product-api.js';
const test = QUnit.test;
QUnit.module('product api');


test('creates round-trip product', (assert) => {
    localStorage.removeItem('products');
    // Arrange
    // Set up your paramenters and expectations
    const product = { name: 'Bob' };

     // Act
    // Call the function you're testing and set the result to a const
    productApi.save(product);
    const result = productApi.get();
    
    // Assert
    assert.deepEqual(result, product);
});

test('no products in local storage, return empty arrays', (assert) => {
    // arrange
    localStorage.removeItem('products');
    const expected = [];
    //act
    const products = productApi.getAll();
    //assert
    assert.deepEqual(products, expected);
});

test('two saves return arrays with two items', (assert) => {
    localStorage.removeItem('products');

    // arrange
    const product1 = { name: 'test1' };
    const product2 = { name: 'test2' };
    const expected = [product1, product2];

    productApi.save(product1);
    productApi.save(product2);

    // act
    const products = productApi.getAll();

    // assert
    assert.deepEqual(products, expected);
});