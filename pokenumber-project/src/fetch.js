//pokemon ID based on input
async function pokemonID(){
        const pokeID = document.getElementById("pokemonNum").value;
        console.log(pokeID);
        await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`)
        .then(response => response.json())
        .then((data) =>{
            //1 is the first number in the pokedex, 1025 is the most recent
            if(pokeID >= 1 && pokeID <= 1025 ){
                console.log(data);
            }else{
                console.error("Not an option")
            }


        console.log("the data's typing is", data.types);
        
        //gets type data individually using for loop
        const types = data.types;
        let pokeType = " ";

        for (let i = 0; i < types.length; i++) {
            console.log(types[i].type.name);
            pokeType += types[i].type.name + ' ';
            console.log("the types are", pokeType);
        }

        //similar for loop also created for ability data
        const abilities = data.abilities;
        let pokeAbility = " ";

        for (let i = 0; i < abilities.length; i++) {
            pokeAbility += abilities[i].ability.name + '<br>';
            console.log(pokeAbility);
        }

        //for loop for stats data
        const stats = data.stats;
        console.log("the data's stats are ", stats);
        let pokeStats = " ";

        for(let i = 0; i < stats.length; i++){
            pokeStats += stats[i].stat.name + ': ' + stats[i].base_stat + '<br>';
            console.log(pokeStats);
        }


            
        //loads up information based on input
        const pokemonInfo = document.getElementById("pokemonInfo");
        //adds specific pokemon's information to the page
        pokemonInfo.innerHTML = `
            <h2>It's...</h2>
            <img id="sprite" src=${data.sprites.front_default} alt="This is the pokemon's sprite facing forward"></img>
            <img id="sprite" src=${data.sprites.front_shiny} alt="This is the pokemon's sprite as a shiny, facing forward"></img>
            <h1>Name: ${data.name}</h1>
            <p><strong>Id:</strong> ${data.id}</p>
            <p><strong>Type(s):</strong> ${pokeType}</p>
            <p><strong>Height:</strong> ${data.height}</p>
            <p><strong>Weight:</strong> ${data.weight}</p>
            <p><strong>Abilities:</strong></p>
            <p>${pokeAbility}</p>

            <p><strong>Base Stats:</strong></p>
            <p>${pokeStats}</p>

            <p><strong>Latest Cry:</strong> 
                <audio controls><source src=${data.cries.latest}><type:"audio/ogg">
                Your browser does not support the audio element </audio>
            </p>
            <p><strong>Legacy Cry:</strong> 
                <audio controls><source src=${data.cries.legacy}><type:"audio/ogg">
                Your browser does not support the audio element </audio>
            </p>
        `; 
    })
};


export{ pokemonID };