/* modoDashboard sera true si existe el contenedor reloj-digital-a. Quiere decir que estoy en
    la página principal (index.html) */
const modoDashboard = !!document.getElementById('reloj-digital-a');

let horaDiv, fechaDiv, zonaHorariaDiv, fraseDiv, dashboardR, relojDigital;

/* si estoy en index.html me traigo el contenedor de reloj-digital y le añado divs para
    hora, fecha, zona horaria y frase  */
if (modoDashboard) {
  const relojContainer = document.getElementById('reloj-digital-a');

  relojContainer.innerHTML = `
    <div id="hora"></div>
    <div id="fecha" style="font-size: 18px;"></div>
    <br>
    <div id="zonaHorariaDiv" style="font-size: 18px;"></div>
    <hr>
    <div id="fraseDiv"></div>
    `;

} else {

      relojDigital = document.getElementById('reloj-digital');

      // array con 5 imágenes de ./img
      const imgFondoR = [
          'url("./img/img1.png")',
          'url("./img/img2.jpg")',
          'url("./img/img3.jpg")',
          'url("./img/img4.jpg")',
          'url("./img/img5.jpg")'
      ];

      let currentReloj = 0;  // indice para recorrer las imagenes

      
      /*****************************************
        FUNCION PARA CAMBIAR LA IMAGEN DE FONDO
      ******************************************/
      function changeBackground() {
        const dashboardIndex = document.getElementById('dashboard');

        if (dashboardIndex) {  // si dashboard existe, estoy en modo individual. Entonces muestro el fondo propio del modo individual
          dashboardIndex.style.backgroundImage = imgFondoR[currentReloj]; // el estilo background-image en el css lo voy cambiando desde aqui

          // currentIndex se queda en bucle infinito recorriendo el array imagenes gracias a %
          currentReloj = (currentReloj + 1) % imgFondoR.length;  
        }
      }


      // cambia la imagen cada 5 segundos
      setInterval(changeBackground, 5000);
      // iniciamos con la primera imagen
      changeBackground();
  }

// hago referencia a los contenedores en el modo Individual
horaDiv = document.getElementById('hora');
fechaDiv = document.getElementById('fecha');
zonaHorariaDiv = document.getElementById('zonaHorariaDiv');
fraseDiv = document.getElementById('fraseDiv');


/************************************************************************
  FUNCION QUE COMPONE LA HORA Y FECHA Y LO VA ACTUALIZANDO CADA SEGUNDO.
*************************************************************************/
function actualizarReloj() {
  const fechaHora = new Date(); // recojo la fecha y hora cada segundo para ir actualizandola

  // extraigo las horas, minutos y segundos del objeto Date
  const horas = fechaHora.getHours();
  const minutos = fechaHora.getMinutes();
  const segundos = fechaHora.getSeconds();
  const formatoHora = `${horas < 10? '0' + horas : horas}:${minutos < 10? '0' + minutos : minutos}:${segundos < 10? '0' + segundos : segundos}`;
  horaDiv.textContent = formatoHora;

  // recogemos en una constante el dia, mes, año
  const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dia = fechaHora.getDate();
  const mes = fechaHora.getMonth() + 1;
  const año = fechaHora.getFullYear();
  const formatoFecha = `${diaSemana[fechaHora.getDay()]}, ${dia}/${mes}/${año}`;
  fechaDiv.textContent = formatoFecha;

  setTimeout(actualizarReloj, 1000);
}

actualizarReloj();


// zona horaria
const zonaHoraria = obtenerZonaHoraria();
zonaHorariaDiv.textContent = zonaHoraria;

/**************************************
  FUNCION PARA OBTENER LA ZONA HORARIA
***************************************/
function obtenerZonaHoraria() {
  const opciones = { timeZoneName: "long" }; // obtenemos la zona horaria en formato largo
  const zonaHoraria = new Intl.DateTimeFormat("es-ES", opciones).format(new Date());
  return zonaHoraria.split(',')[1]; // zonaHoraria es un string. convertimos a array utilizando ',' como separador y cogemos la posicion 1 del array
}

/*****************************************
  FUNCION PARA OBTENER FRASE SEGÚN LA HORA
******************************************/
function obtenerFrase() {
  const fechaHora = new Date();
  const hora = fechaHora.getHours();

  let frase;

  switch (true) {
    case (hora >= 0 && hora <= 7):
      frase = 'Es hora de descansar. Apaga y sigue mañana';
      break;
    case (hora >= 7 && hora <= 12):
      frase = 'Buenos días. Desayuna fuerte y a darle al código';
      break;
    case (hora >= 12 && hora <= 14):
      frase = 'Buenas tardes. Déjame que el código te ayude';
      break;
    case (hora >= 14 && hora <= 16):
      frase = 'Espero que hayas comido';
      break;
    case (hora >= 16 && hora <= 18):
      frase = 'Buenas tardes, el último empujón';
      break;
    case (hora >= 18 && hora <= 22):
      frase = 'Esto ya son horas extras... piensa en parar pronto';
      break;
    case (hora >= 22 && hora <= 0):
      frase = 'Es hora de dormir. Vuelve a la noche';
      break;
    default:
      frase = 'Algo pasa con la hora. No puedo mostrarte una frase !';
  }
  fraseDiv.textContent = frase; // mostramos la frase en el div con id 'fraseDiv'
}

obtenerFrase(); // llama a la función al cargar la página
setInterval(obtenerFrase, 60000); // obtener frase cada 1 minuto