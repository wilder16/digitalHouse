const nodoPadre = document.querySelector('.contenedor')
let contador = 1;

const templateLiteral = (url, index) => {
    return `
    <div class="tarjeta">
        <a class="rutas-img" href="${url}" target="_blank" ><img class="imagen" alt="imagen-${index}" src="${url}"/></a>
      </div>
    `
}
let url = "";

console.log(url)
while(url != null){
    url = prompt(`Por favor ingrese la url de la imagen ${contador}`);
    if(url === null) break;
    nodoPadre.innerHTML += templateLiteral(url, contador++); 
}
    

