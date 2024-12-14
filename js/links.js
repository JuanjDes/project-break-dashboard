/* modoDashboardL sera true si existe el contenedor links-interesantes-a. Quiere decir que estoy en
    la página principal (index.html) */
const modoDashboardL = !!document.getElementById('links-interesantes-a');

let linksDiv, divEnlaces, nombreEnlace, urlEnlace, btnAgregar;

if (modoDashboardL) {
    // estoy en la página principal (index.html)
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

    recibirDivsDom();

}   else {
        // estoy en links.html

        // array con 5 imágenes de ./img
        const imgFondoL = [
            'url("./img/img1.png")',
            'url("./img/img2.jpg")',
            'url("./img/img3.jpg")',
            'url("./img/img4.jpg")',
            'url("./img/img5.jpg")',
            'url("./img/img6.png")',
            'url("./img/img7.jpg")',
            'url("./img/img8.jpg")',
            'url("./img/img9.jpg")',
            'url("./img/img10.jpg")'
        ];

        recibirDivsDom();

        let currentLinks = -1;  // indice para recorrer las imagenes

        /*****************************************
         FUNCION PARA CAMBIAR LA IMAGEN DE FONDO
        ******************************************/
        function changeBackground() {

            const dashboardL = document.getElementById('dashboard');

            if (dashboardL) {  // si dashboardP existe, estoy en modo individual

                let randomLinks;

                do {
                    randomLinks = Math.floor(Math.random() * imgFondoL.length);
                } while (randomLinks === currentLinks);

                dashboardL.style.backgroundImage = imgFondoL[randomLinks]; // el estilo background-image en el css lo voy cambiando desde aqui
        
                currentLinks = randomLinks;
            }
            
        }

        setInterval(changeBackground, 5000);
        changeBackground();
    }


function recibirDivsDom() {
    linksDiv = document.getElementById('links');
    divEnlaces = document.getElementById('divEnlaces');
    nombreEnlace = document.getElementById('nombreEnlace');
    urlEnlace = document.getElementById('urlEnlace');
    btnAgregar = document.getElementById('btnAgregar');
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
    
    // muestro en pantalla el nombre del enlace en formato boton con una X para poder borrarlo
    divEnlaces.innerHTML += `
        <div class="link-container" id="link-${nuevoLink.url}">
            <button id="btnEnlaces" onclick="abrirLink('http://${nuevoLink.url}')">${nuevoLink.nombre}</button>
            <span class="btn-borrar" onclick="borrarLink('${nuevoLink.url}')">X</span>
        </div>    
        `;
            
    
    nombreEnlace.value = '';
    urlEnlace.value = '';
});

// recargo la pagina
window.addEventListener('DOMContentLoaded', () => {
    // itero sobre localStorage, pero recupero la key (item - enlace_ )
    for(let i = 0; i <= localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('enlace_')) {
            const link = JSON.parse(localStorage.getItem(key));
         
            if (link) {
                divEnlaces.innerHTML += `
    
                <div class="link-container" id="link-${link.url}">
                    <button id="btnEnlaces" onclick="abrirLink('http://${link.url}')">${link.nombre}</button>
                    <span class="btn-borrar" onclick="borrarLink('${link.url}')">X</span>
                </div>
    
                `;
                
                numEnlaces = i;
            }
        }
    }
    
    nombreEnlace.value = '';
    urlEnlace.value = '';
});

// Funcion abrirlink() se utiliza en los onclick en los botones de los enlaces
function abrirLink(url) {
    window.open(url, '_blank'); // abro en una pestaña nueva
}


/* Funcion borrarLink() se utiliza en el onclick en los span de borrar
    url contiene la url del boton que quiero borrar. */
function borrarLink(url) {
    // Eliminar el enlace del localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // obtenemos la clave de localStorage en la posicion i
    
        if (key.startsWith('enlace_')) {
            const item = JSON.parse(localStorage.getItem(key));
    
            if (item.url === url) {
                localStorage.removeItem(key);

                // Eliminar el contenedor del enlace del DOM
                const linkContainer = document.getElementById(`link-${url}`);
                
                if (linkContainer) {
                    linkContainer.remove(); }
                return; // salimos del bucle para no seguir buscando en el resto de los enlaces
            } 
        }
    }
}
