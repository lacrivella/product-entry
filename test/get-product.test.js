import getPokedex from '../src/get-pokedex.js';
const test = QUnit.test;

test('create applicant from data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'Pikachu',
        nickname: 'Pika',
        primary: 'Fire',
        secondary: ['ghost'],
        hasBattle: true,
        wins: 2,
        evolving: 5,
    };

    const pokedexData = new FormData();
    pokedexData.set('name', expected.name);
    pokedexData.set('nickname', expected.nickname);
    pokedexData.set('primary', expected.primary);
    pokedexData.set('secondary', expected.secondary);
    pokedexData.set('battle', 'yes');
    pokedexData.set('wins', expected.wins);
    pokedexData.set('evolving', expected.evolving);

    //Act 
    // Call the function you're testing and set the result to a const
    const applicant = getPokedex(pokedexData);
    //Assert
    assert.deepEqual(applicant, expected);
});