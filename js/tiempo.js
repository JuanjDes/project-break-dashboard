/* 
    API del tiempo:                 https://www.weatherapi.com/
    Probar que funciona la API Key: https://www.weatherapi.com/api-explorer.aspx
    Documentacion de la API:        https://www.weatherapi.com/docs/
    Base url para peticiones:       http://api.weatherapi.com/v1
    Ejemplo de peticion:            https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no

*/



const dashboardDiv = document.getElementById('dashboard');

// Funcion fecth para llamar a la API del tiempo: http://api.weatherapi.com/v1

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=d866afed2e11451795595540240912&q=auto:ip`
    );

    if (!response.ok) {
      throw new Error('Error al obtener la información del clima');
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
let ciudad = "Madrid";
getWeatherData(ciudad);