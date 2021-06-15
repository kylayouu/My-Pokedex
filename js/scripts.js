pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
    {name: 'Charmander', height: 0.6, type: 'fire'},
    {name: 'Pikachu', height: 0.4, type: 'electric'}
];

// forEach() loop to list out each Pokemon's information
pokemonList.forEach(function(pokemon) {
    document.write(pokemon.name + ' (height: ' + pokemon.height + '), (type: ' + pokemon.type + ')' + '<br>');
});