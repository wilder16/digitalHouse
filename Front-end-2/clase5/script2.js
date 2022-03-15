// Para modificar poder modificar el  contenido del DOM utilizamos innerHTML o tambies innerText

let textoPrueba = document.querySelector('h3')
textoPrueba.innerHTML += " Me cambiaron";

textoPrueba.innerHTML += " Agrego más cosas";

textoPrueba.style.color = 'red'; // Permite leer o modificar los estilos de un elemento

// Template string
// `${}`

const nombre = 'Wilder';
const miTemplate = `Mi nombre es ${nombre}`;
console.log(miTemplate);
// 

const escribirHTML = (titulo, texto) => {
    const divDinamico = document.getElementById('parrafo-agregado');
    const miTemplate = `
    <h2>${titulo}</h2>
    <p>${texto}</p>`

    divDinamico.innerHTML += miTemplate;
}

escribirHTML('Hola', 'Esto es un ejemplo de template string en html.');
escribirHTML('Es dinámico', 'Podemos insertar elementos HTML mediante <b>JavaScript</b>');
escribirHTML('Facilita la programación', 'Evita escribir mucho código y reutilizar el que si escribamos.');
escribirHTML('En este ejemplo', 'Hemos utilizado una única función para poder escribir 4 veces en HTML, ¿te imaginás lo que sería esto sin esta función?');
