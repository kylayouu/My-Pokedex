// IIFE to return functions add(), getAll(), addListItem()
let pokemonRepository = (function() {
  let pokemonList = [
    {name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
    {name: 'Charmander', height: 0.6, type: 'fire'},
    {name: 'Pikachu', height: 0.4, type: 'electric'}
  ];

  function getAll() {
    return pokemonList;
  };

  function add(pokemon) {
    return pokemonList.push(pokemon);
  };

  function showDetails(pokemon) {
    console.log(pokemon)
  }

  function addListItem(pokemon) {
    pokemonList = document.querySelector('.pokemon-list');

    listItem = document.createElement('li');
    button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-name-btn');

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    // When button is clicked, the pokemon's data is displayed on the console.
    button.addEventListener('click', function() {
      showDetails(pokemon)
    })
  };

  return {
    getAll: getAll,
    add: add,
    showDetails: showDetails,
    addListItem: addListItem
  };
})();

// forEach() loop to display the buttons for the Pokemon list
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});