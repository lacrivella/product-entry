import productApi from '../src/product-api.js';
const test = QUnit.test;
QUnit.module('product api');


test('creates round-trip product', (assert) => {
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