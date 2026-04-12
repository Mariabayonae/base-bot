// Crear las listas de imágenes, títulos y frases
const imagenes = [ 
  "assets/"
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

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("imagen");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length);

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();