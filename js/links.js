/* modoDashboardL sera true si existe el contenedor links-interesantes-a. Quiere decir que estoy en
    la página principal (index.html) */
const modoDashboardL = !!document.getElementById('links-interesantes-a');

let linksDiv, divEnlaces, nombreEnlace, urlEnlace, btnAgregar;

if (modoDashboardL) {
    const enlacesContainer = document.getElementById('links-interesantes-a');
    enlacesContainer.innerHTML = `
        <div id="links">
            <h2>Añade tu enlace de interés</h2>
            <input type="text" name="nombreEnlace" id="nombreEnlace" placeholder="nombre de tu enlace" value = ''>
            <input type="text" name="urlEnlace" id="urlEnlace" placeholder="Url de tu enlace" value = ''>
            <button id="btnAgregar">Añadir enlace</button>
        </div>
        <div id="divEnlaces"></div> 
    `;

    /* Recibo nombre y url de enlaces desde el DOM */    
    linksDiv = document.getElementById('links');
    divEnlaces = document.getElementById('divEnlaces');
    nombreEnlace = document.getElementById('nombreEnlace');
    urlEnlace = document.getElementById('urlEnlace');
    btnAgregar = document.getElementById('btnAgregar');

}   else {
        // array con 5 imágenes de ./img
        const imgFondoL = [
            'url("./img/img1.png")',
            'url("./img/img2.jpg")',
            'url("./img/img3.jpg")',
            'url("./img/img4.jpg")',
            'url("./img/img5.jpg")'
        ];

        let currentLinks = 0;  // indice para recorrer las imagenes

        /*****************************************
         FUNCION PARA CAMBIAR LA IMAGEN DE FONDO
        ******************************************/
        function changeBackground() {
            const dashboardL = document.getElementById('dashboard');

            if (dashboardL) {  // si dashboardP existe, estoy en modo individual
                dashboardL.style.backgroundImage = imgFondoL[currentLinks]; // el estilo background-image en el css lo voy cambiando desde aqui
        
                // currentIndex se queda en bucle infinito recorriendo el array imagenes gracias a %
                currentLinks = (currentLinks + 1) % imgFondoL.length;
            }
            
        }

        setInterval(changeBackground, 5000);
        changeBackground();
    }




let numEnlaces = 0;

// evento click en boton añadir enlace
btnAgregar.addEventListener('click', () => {
    const nuevoLink = {
        nombre: nombreEnlace.value,
        url: urlEnlace.value
    };
    
    numEnlaces++;

    // Almaceno en localStorage
    localStorage.setItem(`enlace_${numEnlaces}`, JSON.stringify(nuevoLink)); // guardo en localStorage nuevoLink en formato String
    
    // muestro en pantalla el nombre del enlace en formato boton
    divEnlaces.innerHTML += `
    <button id="btnEnlaces" onclick="abrirLink('http://${nuevoLink.url}')">${nuevoLink.nombre}</button>`;
    
    nombreEnlace.value = '';
    urlEnlace.value = '';
});

// recargo la pagina
window.addEventListener('DOMContentLoaded', () => {
    for(let i = 1; i <= localStorage.length; i++) {
        const link = JSON.parse(localStorage.getItem(`enlace_${i}`));
        if (link) {
            divEnlaces.innerHTML += `
            <button id="btnEnlaces" onclick="abrirLink('http://${link.url}')">${link.nombre}</button>`;

            numEnlaces = i;
        }
    }
    console.log('numero de enlaces: ', numEnlaces);
    nombreEnlace.value = '';
    urlEnlace.value = '';
});

// Funcion abrirlink() se utiliza en los onclick en los botones de los enlaces
function abrirLink(url) {
    window.open(url, '_blank'); // abro en una pestaña nueva
}