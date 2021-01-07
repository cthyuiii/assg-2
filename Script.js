const pokedex = document.getElementById('pokedex');
const cache ={};
function fetchPokemon() {
	const promises = [];
	for (let i = 1; i <= 898; i++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
		promises.push(fetch(url).then((res) => res.json()));
	}
	Promise.all(promises).then((results) => {
		const pokemon = results.map((result) => ({
			
			name: result.name,
			image: result.sprites['front_default'],
			type: result.types.map((type) => type.type.name).join(', '),
			
			id: result.id,
			apiURL: result.url
		}));
		displayPokemon(pokemon);
	});
}

function caps(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
  }

const displayPokemon = (pokemon) => {
	console.log(pokemon);
	
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card" onclick="pokemoninfo(${pokeman.id})">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${caps(pokeman.type)}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

const pokemoninfo = async (id) =>{
	if(!cache[id]){
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokeman = await res.json();
	cache[id] = pokeman;
	DisplayPopup(pokeman);
	}
	DisplayPopup(cache[id]);
};

const DisplayPopup = (pokeman) =>{
	const type =  pokeman.types.map(type=>type.type.name).join(',');
	const ability= pokeman.abilities.map((ability)=>ability.ability.name).join(', ');
	const image = pokeman.sprites['front_default']
	const htmlstring = `
		<div class = "popup">
			<button id='closebtn' onclick='closepopup()'>Close</button>
			<div class="card">
            	<img class="card-image" src="${image}"/>
				<h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
				<p><small>Abilities: </small>${caps(ability)} |
				<small>Height(m): </small>${(pokeman.height)/10} |
				<small>Weight(kg): </small>${(pokeman.weight)/10} |
            	<small>Type: </small>${caps(type)}</p>
        	</div>
		</div>
		`;
		pokedex.innerHTML = htmlstring + pokedex.innerHTML;
};

const closepopup = () =>{
	const popup = document.querySelector('.popup');
	popup.parentElement.removeChild(popup);
};

fetchPokemon();