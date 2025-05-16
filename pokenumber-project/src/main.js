import './style.css'

import {pokemonID} from './fetch.js'

//event listener for button
const btn = document.getElementById("catch-btn")
btn.addEventListener("click", async () => {
  //when button is pressed, the function for the entered pokemon ID runs
  await pokemonID()
})

