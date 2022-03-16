const imagenes = document.querySelectorAll("img");
const urlImagenes = [];
const nodoA = document.querySelectorAll('a');

imagenes.forEach((_, index) => {
  const url = prompt(`Ingresa la url para la imagen ${index + 1}`);
  urlImagenes.push(url);
  
});

console.log(urlImagenes);

urlImagenes.forEach((url, index) => {
  const nodoImagen = document.querySelector(`#imagen-${index + 1}`);
  nodoImagen.src = url;
  nodoA[index].href = url;
  nodoA[index].setAttribute('target','_blank');
});

// Etapa 3 utilizando template literal

// El nodo que se repite es el div que contiene a las etiquetas a y img
// El nodo padre es el div con la class='contenedor'
// En primera instancia se debe borrar el contenido que se va a construir dinamicamente
// Luego se debe capturar el nodo padre con un selector
// Se procede a crear una función template literal para construir el html dinamicamente 


// const imagenes = document.querySelectorAll("img");
// imagenes.forEach((img, index) => {
//   img.src= prompt(`Ingresa la url para la imagen ${index + 1}`);
// });


// let nuevoP=document.createElement("p");
// nuevoP.innerText="Hola!";
// document.body.appendChild(nuevoP)