// IMÁGENES
const videos = [
  "assets/Chocolate.mp4",
  "assets/Pizza.mp4",
  "assets/Té.mp4",
  "assets/Hamburguesa.mp4",
  "assets/Ensalada.mp4",
  "assets/Coctel.mp4"
];
const colores = [
  "#4a2c2a",
  "#ee3423",
  "#cbe499",
  "#ff9212",
  "#a8d5ba",
  "#ff7676"
];
const titulos = [
  "El Consuelo",
  "La Conexión",
  "La Calma",
  "El Impulso",
  "La Renovación",
  "La Evasión"
];

const frases = [
  "Creo que necesitas un poco de calma. Has cargado cosas sin darte cuenta y solo quieres sentirte mejor, aunque sea un momento.",
  "Se nota que te hace falta compartir más. Tal vez no todo es tan complicado, solo necesitas a alguien cerca.",
  "No tienes que resolver todo ya. Date un momento, respira… a veces eso ya es suficiente.",
  "Hay algo que quieres hacer ya mismo. Solo piensa si es lo que de verdad necesitas o solo lo que se siente fácil.",
  "Algo en ti quiere cambiar, aunque no lo tengas claro. Y está bien empezar poco a poco.",
  "Puede que estés tratando de no pensar mucho en lo que sientes. Pero tarde o temprano eso vuelve… y está bien enfrentarlo a tu ritmo."
];
const video = document.getElementById("imagen");
//const source = document.getElementById("#imagen source");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById ("prediccion1")
const boton = document.getElementById("boton");

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// EVITAR REPETIR
let ultimoIndice = -1;

// FUNCIÓN
function generarPrediccion() {
  let indice;

  do {
    indice = numeroRandom(0, videos.length);
  } while (indice === ultimoIndice);

  ultimoIndice = indice;

  video.src = videos[indice];
  
  titulo.innerText = titulos[indice];
  prediccion.innerText = frases[indice];
  document.body.style.backgroundColor = colores[indice];
}
if (indice === 1) {
  prediccion.style.color = "white"; 
} else {
  prediccion.style.color = "black"
}

// BOTÓN
boton.addEventListener("click", generarPrediccion);

// INICIO
generarPrediccion();