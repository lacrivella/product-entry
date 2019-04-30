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
        evolving: evolving 
    };

    return applicant;
}
export default getPokedex;