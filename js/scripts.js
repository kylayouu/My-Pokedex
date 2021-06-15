// IIFE to return functions add() and getAll()
let pokemonRepository = (function() {
    let pokemonList = [
        {name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
        {name: 'Charmander', height: 0.6, type: 'fire'},
        {name: 'Pikachu', height: 0.4, type: 'electric'}
    ];

    function getAll() {
        return pokemonList;
    };

    function add(item) {
        return pokemonList.push(item);
    };

    return {
        getAll: getAll,
        add: add,
    };
})();

// forEach() loop to list out each Pokemon's information
pokemonRepository.getAll().forEach(function(pokemon) {
    document.write(pokemon.name + ' (height: ' + pokemon.height + '), (type: ' + pokemon.type + ')' + '<br>');
});