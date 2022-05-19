  var heading=document.createElement("h1");
  heading.setAttribute("class","heading");
  heading.innerHTML="DISPLAYING 50 POKEMAN";
  var section=document.createElement("section");
  section.setAttribute("id","sec"); 
  document.body.append(heading,section);


async function getAllPokemon(){
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0";
    try{
        let response = await fetch(url);
        let pokemanjson = await response.json();
        let data=pokemanjson.results;
        //console.log(data);
        data.map((ele) => {
            getPokemon(ele.url)
            
        })
    }catch(error){
        console.log(error);
    }
}
async function getPokemon(url) {
    try {
        const poki = await fetch(url)
        const pokijs = await poki.json();
        //console.log(pokijs);
        createPokemon(pokijs)
    }
    catch (error) {
        console.log(error)
    }
}
function createPokemon(pokijs) {
    sec.innerHTML += ` <div class="container"> 
    <div class="info">
    <h3 class="poki-id">Id : <span>${pokijs.id}</span></h3>
    <p>Name : <span>${pokijs.name.charAt(0).toUpperCase() + pokijs.name.substring(1, pokijs.name.length)}</span></p>
    <p>Abilities : <span>${pokijs.abilities[0].ability.name},${pokijs.abilities[1].ability.name}</span></p>
    <p>Moves : <span>${pokijs.moves[0].move.name},${pokijs.moves[1].move.name}</span></p>
    <p>Weight : <span>${pokijs.weight}<span></p>
    </div>
    </div>
     `
}
getAllPokemon();