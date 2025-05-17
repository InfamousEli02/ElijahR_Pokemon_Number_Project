# ElijahR_Pokemon_Number_Project

# Pika-Number Webpage
This is Elijah Reed's project for TKH IF(The Knowledge House Innovation Fellowship) Web Development Cohort A. I call this project **Pika-Number Webpage**. For this project, we were required to create a web application that fetches data from a free API and displays it using HTML and CSS. This should be done using Vite with API calls being made using fetch or axios with Async/Await or .then/.catch

For my project, I chose to use **PokeAPI**(https://pokeapi.co/). **PokeAPI** is a RESTful API linked to a database containing information about everything in the mainline Pokémon games. In **Pika-Number**, I used **PokeAPI** to display sprites(both normal and shiny), names, and other information such as their cries onto the webpage depending on the number(the Pokémon's id in **PokeAPI**) the user inputted.

## Instructions
- The project is run by inputting a number (between 1 and 1025) in the input bar and then pressing the "I choose you" button next to it.
- The code in the fetch.js file will see what number is input and will then fetch the data using the input number as the Pokémon's id needed for the api url of that Pokémon.
- Once it gets the id, the code will go through the Pokémon's data in the PokeAPI and load it up to the webpage.
- The box, under the input section, that says "What could it be?" will then change to display the Pokémon associated with the number input in the database. 
- From there, the user can scroll through the Pokémon's information(sprites, name, id, type, height, weight, abilities, base stats, and cries) or try to get a different Pokémon to appear.
