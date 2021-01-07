const pokedex = document.getElementById('pokedex');

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
	return str.charAt(0).toUpperCase() + str.slice(1);}

const displayPokemon = (pokemon) => {
	console.log(pokemon);
	
    const pokemonHTMLString = pokemon
        .map(
            (pokeman)=> `
        <li class="card" onclick="pokemoninfo(${pokeman.id})">
            <img class="card-image" src="${pokeman.image}"/>
            <a href="#" style="color: inherit;text-decoration: none;"><h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2></a>
            <p class="card-subtitle">Type: ${caps(pokeman.type)}</p>
        </li>
    	`
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

const pokemoninfo = async (id) =>{
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokeman = await res.json();
	DisplayPopup(pokeman);
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

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("pokedex");
    li = ul.getElementsByClassName('card');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  	const searchBox = document.querySelector(".search-box");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const searchInput = document.querySelector("input");
    searchBtn.onclick =()=>{
	searchBox.classList.add("active");
        searchBtn.classList.add("active");
        searchInput.classList.add("active");
        cancelBtn.classList.add("active");
      }
      cancelBtn.onclick =()=>{
        searchBox.classList.remove("active");
        searchBtn.classList.remove("active");
        searchInput.classList.remove("active");
        cancelBtn.classList.remove("active");
        searchData.classList.toggle("active");
        searchInput.value = "";
      }