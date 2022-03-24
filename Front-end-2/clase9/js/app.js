window.addEventListener("load", function () {
    /* -------------------------------- variables ------------------------------- */
    let contador = 0;
    let cronometro;
    let tiempo = 1000;
    const valor = document.querySelector("#valor");
    const btnIniciar = document.querySelector("#iniciar");
    const btnStop = document.querySelector("#stop");
    const btnPausa = document.querySelector("#pausa");
    const times = document.querySelector("#times");
    const btnAcelerar = document.querySelector("#acelerar");
    let bandera = 0;

    /* -------------------------------- LISTENERS ------------------------------- */
    btnIniciar.addEventListener("click", function (e) {
        console.log("click");
        if(contador === 0){
            play();
            bandera = 0;
        }
    });
    btnStop.addEventListener("click", reiniciar);
    btnPausa.addEventListener("click", pausar);
    btnAcelerar.addEventListener("click", acelerar);

    /* -------------------------------------------------------------------------- */
    /*                                  FUNCIONES                                 */
    /* -------------------------------------------------------------------------- */
    //definimos la funcionalidad de iniciar el cronometro
    function play() {
        cronometro = setInterval(function () {
            contador++;
            console.log(contador);
            renderizar();
        }, tiempo);
    }

    // difinimos la responsabilidad de la funcion renderizar
    function renderizar() {
        valor.innerText = contador;
    }

    // definimos la funcion de pausar
    function pausar() {
        if( bandera === 0 ){
            clearInterval(cronometro);
            bandera = 1;
        }else{
            play()
            bandera = 0;
        }
        
    }

    // definimos la funcionalidad del boton stop
    function reiniciar() {
        clearInterval(cronometro);
        times.innerHTML += `<small>Tiempo: ${contador}</small>`;
        contador = 0;
        tiempo = 1000;
        renderizar();
    }

    // definimos la funcionalidad de acelerar
    // - duplicar la velocidad del cronometro
    // - que se puede seguir multiplicando(duplicando la velocidad)
    // - impacata en el numero del boton
    function acelerar() {
        if (contador != 0) {
            clearInterval(cronometro);
            tiempo /= 2;
            play();
        }
    }
});
