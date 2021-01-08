# ID Assignment 2: PokeDex

Link:https://cthyuiii.github.io/assg-2/

PokeDex Web Application allows users to search for any of the 898 Pokemon that currently exists in the PokeAPI database.

It provides and projects details such as pokemon evolution, typing, abilties and more.

User-Friendly and easy to use. Pokemon Sprites are also presented.
 
## Design Process
 
Since this website is mostly catered to young people, gamers or Pokemon fanatics, I already intended to make it as simple as possible with not much
details flying everywhere.

The colours I used are quite similar to the original PokeDex colours in the game of an orangy red colour

I included a search bar as well as simple clickable cards for user to view Pokemon

From a user's perspective, viewing the details of a Pokemon should be simple and easy. Hence, just search and click!

I lastly figured the most minamalistic look was to just go with a grid displaying all the Pokemon in order.

## Features

Search Bar Feature at the top, allows users to search pokemon while it constantly filters out search results.

All 898 Pokemon displayed in order.

Pokemon 'Cards' to be clicked which contain and display more infomation about the Pokemon.
 
## Technologies Used

Html Code used to implement the classes to later display the data.

CSS Code used to add style and colour to the elements.

JS used to properly fetch data from API as well as other functions such as search bar functions.

Main API from :https://pokeapi.co/ 

Google Fonts for fonts.

Font Awesome script for icon set.

## Testing

Desktop Test

1st Test after first commit
    1. Go to the Pokemon could be displayed until 898 page
    2. Some Pokemons have no sprites loading due to code or api issues
    3. Typing only showed one type for Pokemon with Duo typing
    4. Display was working but could be improved better
    
2nd Test after few commits
    1. Pokemon all have images in sprites forms.
    2. Fixed duo typing issue with join in json array
    3. Popup that can be clicked to reveal more info
    4. height and weight added
    5.close button bug added to divs of card

3rd test 
    1. implemented abilities into popup
    2. fixed close button 2 divs bug
    3. styling and formatting for better visuals

Final test
    1. implemented search bar
    2. works properly and filters our info input as user types
    3. had a bug before implementation was that its icons werent showing

Published onto github:

Mobile test
    1.Link can be opened on mobile devices and across other networks
    2.web page is responsive and reacts to screen resolution
    
## Final few commits
  
  1.Finalized Proper File structure
  2.Added demo video and wireframing
  3.Added documentation into code 
  4. as well as finalizing README.md

## Validator testing

W3C MarkUp Validation Passed. https://validator.w3.org/

W3C CSS Validation failed but can be overlooked due to padding-inline-start possibly not existing in their database https://jigsaw.w3.org/css-validator/

W3C Link Checking test failed but can be overlooked because it failed my external imported font awesome js script https://validator.w3.org/checklink

Color constrast accessiblity validation test passed https://color.a11y.com/Contrast/

spell checking failed due to PokeDex not being a word used in the english language but as a Pokemon entity https://typosaur.us/

Alt text checking test passed https://rushax.com/tools/alt-tag-checker/

## Credits

Credits for the PokeAPI team for the main api program. https://pokeapi.co/

Google Fonts for font styling. 

https://fonts.googleapis.com/css?family=Rubik&display=swap 

https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap

Font Awesome for the icons. https://kit.fontawesome.com/a076d05399.js  

### Media

The sprite images you can see in the web page are all taken from PokeAPI where Pokemon sprite art from the games are compiled.

Icons such as the Search magnify icon or cancel X button is all taken within Font Awesome's data script.

### Acknowledgements

Lastly for inspiration, I am also a Pokemon Fanatic and took interest in creating a working online web application PokeDex.
