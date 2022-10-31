const btnPeticion = document.getElementById('btnPeticion');
const btnshiny = document.getElementById('btnshiny');
const apiData = document.getElementById('apiData');
const exp = document.getElementById('exp');
const nombre = document.getElementById('nombre');
const id = document.getElementById('id');

var image = document.querySelector('img');

function random(){
   return Math.floor(Math.random() * (200 - 1) + 1);
}
var rand = random();



const llamarApi = () => {

     fetch('https://pokeapi.co/api/v2/pokemon/'+random())
     .then(res => res.json())
     .then(data => {

      console.log(data);
      console.log(data.sprites.front_default);

        apiData.innerText = JSON.stringify(data);
        nombre.innerText = `Nombre del pokemon: ${ JSON.stringify(data.name)}`
        exp.innerText = `Experiencia base: ${ JSON.stringify(data.base_experience)}`
        id.innerText = `id: ${ JSON.stringify(data.id)}`
        
        image.src=data.sprites.front_default;
        

     }) 
     .catch(e => console.error(new Error(e)));
}

const llamarshiny = () => {

   fetch('https://pokeapi.co/api/v2/pokemon/'+random())
   .then(res => res.json())
   .then(data => {

    console.log(data);
    console.log(data.sprites.front_shiny);

      apiData.innerText = JSON.stringify(data);
      nombre.innerText = `Nombre del pokemon: ${ JSON.stringify(data.name)}`
      exp.innerText = `Experiencia base: ${ JSON.stringify(data.base_experience)}`
      
      image.src=data.sprites.front_shiny;


   }) 
   .catch(e => console.error(new Error(e)));
}

btnPeticion.addEventListener('click', llamarApi);
btnshiny.addEventListener('click',llamarshiny);