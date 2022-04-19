window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector("form");
    const email = document.querySelector("#inputEmail");
    const password = document.querySelector("#inputPassword");
    const url = 'https://ctd-todo-api.herokuapp.com/v1';
    
    
    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // console.log(email.value,password.value);
        const payload = {
            email: email.value,
            password: password.value
        };
        //configuramos la request del Fetch
        const settings = {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        realizarLogin(settings);
        
        form.reset();
        
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
        fetch(`${url}/users/login`, settings)
        .then(response => {
            console.log(response);

            if (response.ok != true) {
                alert("Alguno de los datos es incorrecto.")
            }

            return response.json();

        })
        .then(data => {
            console.log("Promesa cumplida:");
            console.log(data);

            if (data.jwt) {
                //guardo en LocalStorage el objeto con el token
                localStorage.setItem('jwt', JSON.stringify(data.jwt));

                //redireccionamos a la página
                console.log('redireccionar')
                location.replace('mis-tareas.html');
            }
            
        }).catch(err => {
            console.log("Promesa rechazada:");
            console.log(err);
        })
       

        
    };


});