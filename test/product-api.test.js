const test = QUnit.test;
QUnit.module('product api');

//function
const productApi = {
    save(product) {
        //serialize JSON
        const json = JSON.stringify(product);
        //save to local storage
        localStorage.setItem('product', json);
    },
    get() {
        //get from local storage
        const json = localStorage.getItem('product');
        //deserialize
        const product = JSON.parse(json);
        //return
        return product;
    }
};

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