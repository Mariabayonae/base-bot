// IMÁGENES (asegúrate que estos archivos existen en /assets)
const imagenes = [
  "assets/1.png",
  "assets/2.png",
  "assets/3.png",
  "assets/4.png",
  "assets/5.png",
  "assets/6.png"
];

// COLORES (tu paleta)
const colores = [
  "#4a2c2a", // Chocolate
  "#ee3423", // Pizza
  "#cbe499", // Té
  "#ff9212", // Hamburguesa
  "#a8d5ba", // Ensalada
  "#ff7676"  // Cóctel
];

// TÍTULOS
const titulos = [
  "El Consuelo",
  "La Conexión",
  "La Calma",
  "El Impulso",
  "La Renovación",
  "La Evasión"
];

// FRASES
const frases = [
  "Creo que necesitas un poco de calma. Has cargado cosas sin darte cuenta y solo quieres sentirte mejor, aunque sea un momento.",
  "Se nota que te hace falta compartir más. Tal vez no todo es tan complicado, solo necesitas a alguien cerca.",
  "No tienes que resolver todo ya. Date un momento, respira… a veces eso ya es suficiente.",
  "Hay algo que quieres hacer ya mismo. Solo piensa si es lo que de verdad necesitas o solo lo que se siente fácil.",
  "Algo en ti quiere cambiar, aunque no lo tengas claro. Y está bien empezar poco a poco.",
  "Puede que estés tratando de no pensar mucho en lo que sientes. Pero tarde o temprano eso vuelve… y está bien enfrentarlo a tu ritmo."
];

// ELEMENTOS DEL HTML
const imagen = document.getElementById("imagen");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// FUNCIÓN RANDOM
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// FUNCIÓN PRINCIPAL
function generarPrediccion() {
  const indice = numeroRandom(0, imagenes.length);

  imagen.src = imagenes[indice];
  titulo.innerText = titulos[indice];
  prediccion.innerText = frases[indice];

  // CAMBIO DE COLOR DE FONDO
  document.body.style.backgroundColor = colores[indice];
}

// EVENTO BOTÓN
boton.addEventListener("click", generarPrediccion);

// CARGA INICIAL
generarPrediccion();