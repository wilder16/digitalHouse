let fondo = document.querySelector('body');
let h1 = document.querySelector("h1");
let cards = document.getElementsByClassName("item")
let text = document.getElementsByTagName(".dark p");

let modoOscuro = confirm("Desea pasar a modo oscuro");

if(modoOscuro){
    fondo.classList.add("dark");
    h1.classList.add(".dark h1");
    cards.classList.add(".dark .contenedor .item");
    text.classList.add(".dark p")
}else{
    fondo.classList.remove("dark");
}




