pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
    {name: 'Charmander', height: 0.6, type: 'fire'},
    {name: 'Pikachu', height: 0.4, type: 'electric'}
];

// loop to list out each Pokemon's information
for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + '<br/>');
}