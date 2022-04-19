let formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
    
    // Se utiliza para evitar el comportamiento por defecto del boton  
    e.preventDefault();

    // capturamos los valores ingresados por el usuario el trim() se utiliza para eliminar los espacios de los extremos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const cel = document.getElementById("cel").value.trim();
    let sexo = document.getElementsByName("sexo");
    let hobby = document.getElementsByName("hobby");
    const hobbys = [];
    const pelicula = document.getElementById("peliculas").value.trim();


    // recorremos el array que tiene almacenado los radioButton y solo volvemos almacenar en la variable sexo el que esta seleccionado
    sexo.forEach(function (elemento) {
        if (elemento.checked) {
            sexo = elemento.value;
        }
    });

    // recorremos el array tiene almacenado los checkbox y solo almacenaremos en el nuevo array los que estan seleccionado 
    hobby.forEach(function (elemento) {
        if (elemento.checked) {
            hobbys.push(elemento.value.toUpperCase());
        }
    });

    // cortamos el string peliculas por las ";" y almacenamos los nuevos string en un array 
    const peliculas = pelicula.toUpperCase().split(";");


    // Almacemamos los valores obtenidos en un objeto literal 
    const datosFormulario = {
        nombreCompleto: nombre.concat(" ", apellido).toUpperCase(),
        celular: cel,
        sexo: sexo,
        hobby: hobbys,
        peliculas: peliculas
    };
    console.table(datosFormulario);
});
