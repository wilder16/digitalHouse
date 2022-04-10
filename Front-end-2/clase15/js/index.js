

    // nos guardamos referncia de los nodos importantes
    const form = document.forms[0];
    const inputComentario = document.querySelector('#comentario');
    const cajaComentarios = document.querySelector('.comentarios');

    let listadoComentarios = [];

    // chequeo si ya existe algo en storage
    let comentariosEnDeposito = JSON.parse(localStorage.getItem('comentariosEnStorage'));

    if(comentariosEnDeposito != null){
        // si habia algo guardado, se lo asigno a mi array en memoria
        listadoComentarios = comentariosEnDeposito;
        renderizarComentarios(listadoComentarios);
    }

    // utilizamos el submit para lanzar cierto accionar
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        guardarComentario(inputComentario.value);

        renderizarComentarios(listadoComentarios);

        form.reset();
    });

    
    /* -------------------------------- FUNCIONES ------------------------------- */
    function guardarComentario(comentario) {
        if(comentario!=""){
        listadoComentarios.push(comentario);
        // agrego la funcionalidad para perdurar en localStorage
        localStorage.setItem('comentariosEnStorage', JSON.stringify(listadoComentarios));
        }
    }

    function renderizarComentarios(listado) {
        cajaComentarios.innerHTML = "";
        listado.forEach(item => {
            
            cajaComentarios.innerHTML += `<p>${item}<button onclick=''>cerrar</button></p>`;
            // let texto = document.createTextNode(item);
            // let parrafo = document.createElement('p');
            // parrafo.appendChild(texto);
            // cajaComentarios.appendChild(parrafo);
        });
    }

    const eliminarItem = () => {
        let 
    }

