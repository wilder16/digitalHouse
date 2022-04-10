/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

const form = document.querySelector('form');
const input = document.querySelector('input');
const nodoPadreDeComentarios = document.querySelector('.comentarios');
let array = [];


form.addEventListener('submit', function(e){
    e.preventDefault();
    array.push(input.value);
    renderizarComentarios(array);

})


const renderizarComentarios = (array) => {

    array.forEach((comentario) => {
        const p = document.createElement('p');
        let comentarioUnico = document.createTextNode(comentario)
        p.appendChild(comentarioUnico)
        nodoPadreDeComentarios.appendChild(p);
    })
}