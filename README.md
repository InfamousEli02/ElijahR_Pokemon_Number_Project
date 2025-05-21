# ElijahR_Pokemon_Number_Project

# PokeInput DB Webpage
This is Elijah Reed's project for TKH IF(The Knowledge House Innovation Fellowship) Web Development Cohort A. I call this project **PokeInput-DB Webpage**. For this project, we were required to create a web application that fetches data from a free API and displays it using HTML and CSS. This should be done using Vite with API calls being made using fetch or axios with Async/Await or .then/.catch

For my project, I chose to use **PokeAPI**(https://pokeapi.co/). **PokeAPI** is a RESTful API linked to a database containing information about everything in the mainline Pokémon games. In **PokeInput-DB**, I used **PokeAPI** to display sprites(both normal and shiny), names, and other information such as their cries onto the webpage depending on the number(the Pokémon's id in **PokeAPI**) the user inputted. The folder *"Pokenumber-project"* contains an *index.html* file, a *style.css* file, a *main.js* file that calls for the function that grabs the Pokémon's id, and a *fetch.js* file that contains said function in order to fetch the API and check for the data of the input id. 

## Instructions
- The project is run by inputting a number (between 1 and 1025) in the input bar and then pressing the "I choose you" button next to it.
- The code in the fetch.js file will see what number is input and then fetches the data using the input number as the Pokémon's id needed for the api url of that Pokémon.
- Once it gets the id, the code will go through the Pokémon's data in the PokeAPI and load it up to the webpage.
- The box, under the input section, that says "What could it be?" will then change to display the Pokémon associated with the number input in the database. 
- From there, the user can scroll through the Pokémon's information(sprites, name, id, type, height, weight, abilities, base stats, and cries) or try to get a different Pokémon to appear.

The final result should look something like this:
![image](https://github.com/user-attachments/assets/ebd5213c-6495-4470-815a-e65126565c07)

## Credit
- PokeAPI: https://pokeapi.co/ for the API data
- Pokeball Images: **Bulbapedia** & **Pokemon** 
