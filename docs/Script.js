//Linked pokedex constant with pokedex list in index
const pokedex = document.getElementById('pokedex');

//Function to fetch pokemon data in the api
//promise is the response from fetch which preloads all the fetched data at once rather one by one
//speeds up loading time
//for loop to count all 898 pokemon available
//fetched data is mapped into data variables later used to display
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
//function to capitalize objects in arrays that do not come capitalized
//Simply for the visuals
function caps(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);}

//displaying pokemon function
//maps and returns the written html list into the main index file displayed onto the main page
//join function is used to convert map array into string
//onclick creates an event where user clicks on the pokemon card which is followed up later
const displayPokemon = (pokemon) => {
	//console.log(pokemon);
	
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

//fetch request make for specific id pokemon
//url as well as pokeman data class is fetched after id is received
//displaypopup constant display the data fetched when onclick is triggers
const pokemoninfo = async (id) =>{
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokeman = await res.json();
	DisplayPopup(pokeman);
};

//similar to displaypokemon api call is made for id clicked
//data is returned back and taken from array (type and ability)
//and coverted into a string so that it can be displayed onto html
//images sprite are under front_default
//html string is written as an extra div class into the top of the list generated
//close button will be explained after this
//pokemon height weight and name are all values not in a an array or json object (string or integer)
//hence they can be used on immediate effect without being coverted
const DisplayPopup = (pokeman) =>{
	const type =  pokeman.types.map(type=>type.type.name).join(', ');
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
		//adds on this html to the currently already added html from displaypokemon
		pokedex.innerHTML = htmlstring + pokedex.innerHTML;
};

//close popup function button
//once clicked the parent element essential removes the .popup child element that was created
const closepopup = () =>{
	const popup = document.querySelector('.popup');
	popup.parentElement.removeChild(popup);
};

fetchPokemon();

//Search Bar JavaScript
//this function essentially filters out data from the input gathered rather then having to be search immediately
function myFunction() {
    //Declared variables
	var input, filter, ul, li, a, i, txtValue;
	//using myinput id
    input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	//using the pokedex unordered list
	ul = document.getElementById("pokedex");
	//to get the card elements in the list
    li = ul.getElementsByClassName('card');
  
	//Loops through all list items, and hides those who don't match the search query
	//since all card classes are anchored, it checks all of the anchor texts name which
	//contain the pokemon names and basically filters our those that dont match the input value
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

//links all the const to the search bar classes in html
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");

//when search button is clicked box,button, input and cancel button active classes are added
	searchBtn.onclick =()=>{
	searchBox.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
	}
//similar to the above when cancel button is clicked box,button, input and cancel button active classes are removed
    cancelBtn.onclick =()=>{
    searchBox.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    }
