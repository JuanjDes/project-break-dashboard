  const dashboardIndex = document.getElementById('dashboard-index'); // en dashboardIndex ire mostrando las imagenes de fondo

  // array con 5 imágenes de ./img
  const imgFondo = [
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
  /************************************************************ 
   currentIndex a -1 como una forma de indicar que, al inicio,
    no hay ninguna imagen mostrada todavía.
  ************************************************************/
  let currentIndex = -1;

  /*****************************************
    FUNCION PARA CAMBIAR LA IMAGEN DE FONDO
  ******************************************/
  function changeBackground() {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * imgFondo.length);
    } while (randomIndex === currentIndex);

      dashboardIndex.style.backgroundImage = imgFondo[randomIndex]; // el estilo background-image en el css lo voy cambiando desde aqui

      currentIndex = randomIndex;
    }

  // cambia la imagen cada 5 segundos
  setInterval(changeBackground, 5000);
  // iniciamos con la primera imagen
  changeBackground();


function abrirModulo(url) {
  // abre una nueva ventana con la url del modulo
  window.open(url, '_blank');
}