// Cuando se quiere que se cargue en primera instancia la 
// pagina y luego si se cargue los script se debe encerrar 
// a todo el cuerpo del script en el evento onload

window.onload = function(){
    console.log(1);
}

window.onload = function(){
    console.log(2); 
    // No es tan recomendable utilizar si se tiene más de una vez llamada en el scrip ya que 
	// la ultima llamada pisaria a las primeras llamadas trayendo consigo problemas

}

window.addEventListener("load", function(){
    console.log("Estoy dentro del window.addEventListener 1")
})

window.addEventListener("load", function(){
    console.log("Estoy dentro del window.addEventListener 2")
})

window.addEventListener("load", function(e) {
    console.log(e);
    e.preventDefault(); // Esto cancela el comportamiento por defecto de la etiqueta 
    let btn = document.querySelector(".btn");
    console.log(btn)
    btn.addEventListener("click",function() {
        alert("hice click en el botón");
        console.log(this); // Esto me permite visualizar en donde ocurrió el evento
    })
})

// Eventos del mouse
window.addEventListener('load', function(){
    const btn2 = document.querySelector(".btn2");
    btn2.addEventListener('click', function(){
        btn2.style.color = prompt('Elija el color del boton ingresar en ingles');
    })

    const btn3 = document.querySelector('.btn3');
    console.log(btn3)
    btn3.addEventListener('dblclick', function(){
        alert("hice doble click en el botón 3");
    })

    const btn4 = document.querySelector('.btn4');
    console.log(btn4)
    btn4.addEventListener('mouseover', function(){
        alert("Estoy encima del botón 4");
    })

    const btn5 = document.querySelector('.btn5');
    console.log(btn5)
    btn5.addEventListener('mouseout', function(){
        alert("Sali de encima del botón 5");
    })

})

// Eventos del teclado
window.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        alert('Precionaste la tecla Enter');
    }
})

window.addEventListener('keydown', function(e){
    if(e.key == 'w'){
        alert('Precionaste la tecla w');
    }
})

