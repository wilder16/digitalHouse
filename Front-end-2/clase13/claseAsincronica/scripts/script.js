window.addEventListener("load", function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {

        const errores = [];

        const inputNombre = document.getElementById("nombres");
        const inputApellido = document.getElementById("apellidos");

        if(inputNombre.value === ""){
            errores.push("Tiene que escribir tu nombe");
        }else if(inputNombre.value.length <= 3 ){
            errores.push("tiene que ingresar mas de tres letras en el input nombres")
        }

        if(inputApellido.value === ""){
            errores.push("Tiene que escribir tus apellidos");
        }else if(inputApellido.value.length <= 3 ){
            errores.push("tiene que ingresar mas de tres letras en el input de apellidos")
        }

        if(errores.length > 0 ){
            e.preventDefault();
            const ulErrores = document.querySelector("div.errores ul");

            errores.forEach(function(elenment){
                ulErrores.innerHTML += "<li>" + elenment + "</li>";
            })

        }



        
    })
    
})