const test = QUnit.test;
QUnit.module('product api');

//function
const productApi = {
    save() {
        //serialize JSON
        //save to local storage
    },
    get() {
        //get from local storage
        //deserialize
        //return
    }
};


test('creates product api test', (assert) => {
    // Arrange
    // Set up your paramenters and expectations
    const product = { name: 'test'};

     // Act
    // Call the function you're testing and set the result to a const

    // Assert
    assert.deepEqual(result, product);
});