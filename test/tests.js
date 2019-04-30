const test = QUnit.test;

function getPokedex(pokedexData) {
    //convert data into variables
    const hasBattle = pokedexData.get('battle') === 'yes';
    const wins = parseInt(pokedexData.get('wins'));
    const evolving = parseInt(pokedexData.get('evolving'));

    //object variables
    const applicant = {
        name: pokedexData.get('name'),
        nickname: pokedexData.get('nickname'),
        primary: pokedexData.get('primary'),
        secondary: pokedexData.getAll('secondary'),
        hasBattle: hasBattle,
        wins: wins,
        evolving: evolving };

    return applicant;
}
test('create applicant from data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'Pikachu',
        nickname: 'Pika',
        primary: 'Fire',
        secondary: ['ghost'],
        battle: true,
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