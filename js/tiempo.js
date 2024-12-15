/* 
    API del tiempo:                 https://www.weatherapi.com/
    Probar que funciona la API Key: https://www.weatherapi.com/api-explorer.aspx
    Documentacion de la API:        https://www.weatherapi.com/docs/
    Base url para peticiones:       https://api.weatherapi.com/v1
    Ejemplo de peticion:            https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no

*/



/* modoDashboardT sera true si existe el contenedor meteo-a. Quiere decir que estoy en
    la página principal (index.html) */
const modoDashboardT = !!document.getElementById('meteo-a');

if (modoDashboardT) {
  const tiempoContainer = document.getElementById('meteo-a');
  tiempoContainer.innerHTML = `
    <p>Obteniendo información del Clima ...</p>
    <p>API restringe peticiones ...</p>
    `;
} else {
    /* const dashboardDiv = document.getElementById('dashboard'); */
    const tiempoDiv = document.getElementById('tiempo');
    tiempoDiv.innerHTML = `
        <p>Obteniendo información del Clima ...</p>
        <p>API restringe peticiones ...</p>
        `;
}



/* obtengo ubicacion precisa del navegador y recojo datos del tiempo 
    no utilizo funcion asincrona con await porque retrasa mucho la carga de la página */
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;

    const data = await getWeatherData(latitude, longitude);

    mostrarDatosClima(data);
  })
}


function mostrarDatosClima(data) {

  if (modoDashboardT) {
    
    const tiempoContainer = document.getElementById('meteo-a');

    // en tiempoContainer muestro la información del tiempo
    tiempoContainer.innerHTML = `
      <h5>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></h5>
      <h2>Tiempo hoy en ${data.location.region} (${data.location.country})</h2>
      <p>Temp: ${data.current.temp_c} ºC</p>
      <p>Humedad: ${data.current.humidity}%</p>
      <p>Vel. del viento: ${data.current.wind_kph} km/h</p>
      <p>Clima: ${data.current.condition.text}</p>
      <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    `;

  } else {

      // array con 5 imágenes de ./img
      const imgFondoT = [
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

    let currentTiempo = -1;  // indice para recorrer las imagenes

        /*****************************************
         FUNCION PARA CAMBIAR LA IMAGEN DE FONDO
        ******************************************/
        function changeBackground() {

            const dashboardT = document.getElementById('dashboard');

            if (dashboardT) {  // si dashboardT existe, estoy en modo individual

                let randomTiempo;

                do {
                    randomTiempo = Math.floor(Math.random() * imgFondoT.length);
                } while (randomTiempo === currentTiempo);

                dashboardT.style.backgroundImage = imgFondoT[randomTiempo]; // el estilo background-image en el css lo voy cambiando desde aqui
        
                currentTiempo = randomTiempo;
            }
            
        }

        setInterval(changeBackground, 5000);
        changeBackground();
    }

      const tiempoDiv = document.getElementById('tiempo');

      // mostramos datos en pantalla (dashboard)
      tiempoDiv.innerHTML = `
        <h5>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></h5>
        <h2>Tiempo hoy en ${data.location.region} (${data.location.country})</h2>
        <hr>
        <p>Temp: ${data.current.temp_c} ºC</p>
        <p>Humedad: ${data.current.humidity}%</p>
        <p>Vel. del viento: ${data.current.wind_kph} km/h</p>
        <p>Clima: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
      `;
} 


async function getWeatherData(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d866afed2e11451795595540240912&q=${latitude},${longitude}&lang=es`
    );

    if (!response.ok) {
      throw new Error('Error al obtener la información del clima');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}