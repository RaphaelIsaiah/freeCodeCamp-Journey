// DOM ELEMENT SELECTION
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const pokemonImg = document.getElementById("pokemon-img");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const fccProxyApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

// Async function to fetch data from the API
const fetchPokemon = async () => {
  try {
    // To enable search by either name or id
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const res = await fetch(`${fccProxyApi}${pokemonNameOrId}`);
    const data = await res.json();

    // Setting Pokémon details
    pokemonName.textContent = `${data.name}`;
    pokemonId.textContent = `#${data.id}`;
    weight.textContent = `${data.weight}`;
    height.textContent = `${data.height}`;
    pokemonImg.innerHTML = `<img  src="${data.sprites.front_default}" alt="${data.name} front default sprite" />`;

    // Setting the pokémon types
    types.innerHTML = data.types
      .map(
        (obj) => `<span class="type ${obj.type.name}">${obj.type.name}</span>`
      )
      .join("");

    //  Setting the pokémon stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    // console.log(data.stats[5]);
  } catch (err) {
    alert("Pokémon not found");
    console.log(`Pokémon not found: ${err}`);
  }
};

// fetchPokemon();

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchPokemon();
});
