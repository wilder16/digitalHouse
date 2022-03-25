/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
};

const listado = [
    {
        imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
        lenguajes: "HTML y CSS",
        bimestre: "1er bimestre",
    },
    {
        imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
        lenguajes: "Javascript",
        bimestre: "2do bimestre",
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        lenguajes: "React JS",
        bimestre: "3er bimestre",
    },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    datosPersona.nombre = prompt("Ingresa tu nombre");
    datosPersona.edad =
        new Date().getFullYear() -
        parseInt(prompt("Ingresa el año en que naciste"));
    datosPersona.ciudad = prompt("Ingresa la ciudad en donde vives");
    datosPersona.interesPorJs = confirm("Te interesa JavaScript?")
        ? "Si"
        : "No";
}

function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    const span = document.querySelectorAll("span");
    let i = 0;
    Object.entries(datosPersona).forEach(([_, value]) => {
        span[i++].innerText = value;
    });
}

function recorrerListadoYRenderizarTarjetas() {
    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    const contenedor = document.getElementById("fila");
    const templateLiteral = (element) => {
        return `
    <div class="caja">
        <img src="${element.imgUrl}" alt="${element.lenguajes}">
        <p class="lenguajes">${element.lenguajes}</p>
        <p class="bimestre">${element.bimestre}</p>
    </div>
    `;
    };
    listado.forEach(
        (element) => (contenedor.innerHTML += templateLiteral(element))
    );
    materiasBtn.removeEventListener(
        "click",
        recorrerListadoYRenderizarTarjetas
    );
}

function alternarColorTema() {
    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    const sitio = document.getElementById("sitio");
    sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener("keydown", function (e) {
    if (e.key == "f") {
        const p = document.querySelector(".oculto");
        p.style.visibility = "visible";
    }
});
