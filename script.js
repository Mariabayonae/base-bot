const imagenes = [
 "fotos/chocolate.jpg",
  "fotos/helado.jpg",
  "fotos/pastel.jpg",

  "fotos/gomitas.jpg",
  "fotos/galletas.jpg" 
];

const titulos = [
  "Chocolate caliente",
  "Helado cremoso",
  "Pastel de cumpleaños",
  "Gomitas ácidas",
  "Galletas recién horneadas"
];

const frases = [
  "Necesitas un descanso. Algo tranquilo, sin exigencias, que te haga sentir seguro.",
  "Hoy estás más sensible. No te fuerces, todo puede ir más despacio.",
  "No tienes que hacer nada especial para merecer algo bonito. Date el crédito.",
  "Estás buscando algo distinto, un cambio pequeño que te saque de la rutina.",
  "Tu cabeza está muy llena. Respira un poco y baja la intensidad.",
];

const clases = [
  "chocolate",
  "helado",
  "pastel",
  "gomitas",
  "galletas"
];


const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");
const body = document.body;

let index = 0;
let modoRandom = false;

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generarPrediccion() {

  let i;

 
  if (!modoRandom) {
    i = index;
    index++;

    
    if (index >= frases.length) {
      modoRandom = true;
    }

  } else {
    i = numeroRandom(0, frases.length);
  }

  titulo.innerText = titulos[i];
  imagen.src = imagenes[i];
  prediccion.innerText = frases[i];

  body.className = "";
  body.classList.add(clases[i]);
}

boton.addEventListener("click", generarPrediccion);


generarPrediccion();