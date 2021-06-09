pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
    {name: 'Charmander', height: 0.6, type: 'fire'},
    {name: 'Pikachu', height: 0.4, type: 'electric'}
];

// loop to list out each Pokemon's information
for (let i = 0; i < pokemonList.length; i++) {
    text = pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')';

    // conditional
    if (pokemonList[i].height > 0.5) {
        text = text + ' - Wow that\'s a big Pokemon!';
    }

    document.write(text + '<br><br>');

}