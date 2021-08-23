// IIFE to return functions add(), getAll(), addListItem()
let pokemonRepository = (function() {
  // let pokemonList = [
  //   {name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
  //   {name: 'Charmander', height: 0.6, type: 'fire'},
  //   {name: 'Pikachu', height: 0.4, type: 'electric'}
  // ];


  const apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let pokemonList = [];

  loadList = () => {

  fetch(apiURL)
  .then(response=>response.json())
  .then(response =>
  {
    pokemonList = response.results;
    pokemonList.forEach(pokemon=>{
    let newPokemonList = document.querySelector(".pokemon-list");
      let listItemPokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("pokemon-name-btn");
      button.addEventListener('click', function() {

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(response=>response.json())
        .then(response=>{
          console.log(response)
          console.log(response.sprites.back_shiny)

           let pokemonDetails = `Height: ${response.height}`
       

        modal.showModal(`${pokemon.name}`, `${pokemonDetails}`, `${response.sprites.back_shiny}`);


        })
        .catch(err=>console.error(err))

       
        // alert(pokemonDetails);
      });
      listItemPokemon.appendChild(button);
      newPokemonList.appendChild(listItemPokemon);
      })
      })
      .catch(error=>console.log(error))
  }

  function getAll() {
    loadList();
  };

  function add(pokemon) {
    return pokemonList.push(pokemon);
  };

  function showDetails(pokemon) {
    console.log(pokemon)
  }

  return {
    getAll: getAll,
    add: add,
    showDetails: showDetails,
    loadList: loadList,
  };
})();

// forEach() loop to display the buttons for the Pokemon list
pokemonRepository.getAll();
