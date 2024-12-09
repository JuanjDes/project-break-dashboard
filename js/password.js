/* modoDashboardP sera true si existe el contenedor crea-contrasena-a. Quiere decir que estoy en
    la página principal (index.html) */
const modoDashboardP = !!document.getElementById('crea-contrasena-a');

let contrasenaDiv, generarBtn, numCaracteres, passwordGenerada;

if (modoDashboardP) {
    const contrasenaContainer = document.getElementById('crea-contrasena-a');
    contrasenaContainer.innerHTML = `
        <div id="contrasena">
            <h2>Genera una contraseña segura</h2>
            <label for="caracteres" name="caracteres">Caracteres de la contraseña: 12 a 50 </label>
            <input type="number" name="caracteres" id="caracteres" value="12" min="12" max="50">
            <button id="generar">Generar contraseña</button>
            <div id="password-result"></div>
        </div>
        `; 
        
}   else {

    // array con 5 imágenes de ./img
        const imgFondoP = [
            'url("./img/img1.png")',
            'url("./img/img2.jpg")',
            'url("./img/img3.jpg")',
            'url("./img/img4.jpg")',
            'url("./img/img5.jpg")'
        ];

        let currentPassword = 0;  // indice para recorrer las imagenes

        /*****************************************
         FUNCION PARA CAMBIAR LA IMAGEN DE FONDO
        ******************************************/
        function changeBackground() {
            const dashboardP = document.getElementById('dashboard');

            if (dashboardP) {  // si dashboardP existe, estoy en modo individual
                dashboardP.style.backgroundImage = imgFondoP[currentPassword]; // el estilo background-image en el css lo voy cambiando desde aqui
        
                // currentIndex se queda en bucle infinito recorriendo el array imagenes gracias a %
                currentPassword = (currentPassword + 1) % imgFondoP.length;
            }
            
        }

        setInterval(changeBackground, 5000);
        changeBackground();
    }

contrasenaDiv = document.getElementById('contrasena');
generarBtn = document.getElementById('generar');
numCaracteres = document.getElementById('caracteres');
passwordGenerada = document.getElementById('password-result');

// ARRAYS CON LETRAS MAYUSCULAS, MINUSCULAS, NUMEROS DE 0 A 9 Y CARACTERES ESPECIALES
const arrayMayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const arrayMinusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
const arrayNumeros = ['0','1','2','3','4','5','6','7','8','9'];
const arrayEspeciales = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','[','{',']','}',';',':','"',',','.','<','>','/','?'];

// EVENTO DE CLICK EN BOTON Generar contraseña
generarBtn.addEventListener('click', () => {
    let contrasena = '';
    const caracteresTotales = parseInt(numCaracteres.value, 10);

    if (isNaN(caracteresTotales) || caracteresTotales < 12) {
        alert('Por favor, introduce un número valido de caracteres');
        return; // sale de la función
    }

    for (let i = 0; i < caracteresTotales; i++) {
        const randomArray = [arrayMayusculas, arrayMinusculas, arrayNumeros, arrayEspeciales];  // meto los arrays en uno solo
        const chosenArray = randomArray[Math.floor(Math.random() * randomArray.length)];  // chosenArray contiene uno de los arrays al azar
        const randomCharacter = chosenArray[Math.floor(Math.random() * chosenArray.length)];  // del array al azar obtengo un caracter

        contrasena += randomCharacter;  // añado el caracter al final de la cadena de contraseña

    }
    passwordGenerada.innerText = contrasena;
});



