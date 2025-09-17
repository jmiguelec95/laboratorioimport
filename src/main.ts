import "./style.css";

type ESTADOS = "MENORQUECINCO" | "CINCO" | "ENTRESEISYSIETE" | "MAYORQUESIETEYMEDIO" | "SIETEYMEDIO";

let puntuacion: number = 0;
let carta: number = 0;

const puntuacion_elemento = document.getElementById("puntuacion");
const botonpedircarta = document.getElementById("pedir_carta");
const img_carta = document.getElementById("carta");
const botonplantarse = document.getElementById("plantarse");
const mensaje_elemento = document.getElementById("mensaje");

const actualizarEstado = () => {
  if (puntuacion > 7.5) return "MAYORQUESIETEYMEDIO";
  if (puntuacion === 7.5) return "SIETEYMEDIO";
  if (puntuacion > 5) return "ENTRESEISYSIETE";
  if (puntuacion === 5) return "CINCO";
  return "MENORQUECINCO";
};

const actualizarPuntuacionEnPantalla = () => {
  const situacion: ESTADOS = actualizarEstado();
  switch (situacion) {
    case "MENORQUECINCO":
    case "CINCO":
    case "ENTRESEISYSIETE":
    case "SIETEYMEDIO":
      if (puntuacion_elemento !== null && puntuacion_elemento !== undefined) {
        puntuacion_elemento.innerText = `Puntuación: ${puntuacion}`;
      }
      break;
    case "MAYORQUESIETEYMEDIO":
      if (puntuacion_elemento !== null && puntuacion_elemento !== undefined) {
        puntuacion_elemento.innerText = `GAME OVER, Te has pasado con ${puntuacion} puntos.`;
        if (botonpedircarta !== null && botonpedircarta !== undefined) {
          botonpedircarta.setAttribute("disabled", "true");
        }
        if (botonplantarse !== null && botonplantarse !== undefined) {
          botonplantarse.setAttribute("disabled", "true");
        }
      }
      break;
  }
};
const mensajepuntuacion = (mensaje: string) => {
  if (mensaje_elemento !== null && mensaje_elemento !== undefined) {
    mensaje_elemento.innerText = mensaje;
  }
};

const desactivarBotones = () => {
  if (botonpedircarta !== null && botonpedircarta !== undefined) {
    botonpedircarta.setAttribute("disabled", "true");
  }
  if (botonplantarse !== null && botonplantarse !== undefined) {
    botonplantarse.setAttribute("disabled", "true");
  }
};
const plantarse = () => {
  const situacion: ESTADOS = actualizarEstado();
  switch (situacion) {
    case "MENORQUECINCO":
      mensajepuntuacion(`Has sido muy conservador`);
      desactivarBotones();
      break;
    case "CINCO":
      mensajepuntuacion(`Te ha entrado el canguelo eh?`);
      desactivarBotones();
      break;
    case "ENTRESEISYSIETE":
      mensajepuntuacion(`Casi casi...`);
      desactivarBotones();
      break;
    case "SIETEYMEDIO":
      mensajepuntuacion(`¡Lo has clavado! ¡Enhorabuena!`);
      desactivarBotones();
      break;
  }
};

const actualizarPuntuacion = () => {
  let valor_carta: number = 0;
  if (carta > 7) {
    valor_carta = 0.5;
  } else {
    valor_carta = carta;
  }
  puntuacion += valor_carta;
  actualizarPuntuacionEnPantalla();
};

const renderizarCarta = () => {
  if (
    img_carta !== null &&
    img_carta !== undefined &&
    img_carta instanceof HTMLImageElement
  ) {
    img_carta.src = `/src/assets/carta${carta}.jpg`;
  }
};

const nuevaCarta = () => {
  carta = Math.floor(Math.random() * 10) + 1;
  if (carta > 7) {
    carta = carta + 2;
  }
  actualizarPuntuacion();
  renderizarCarta();
};

if (botonpedircarta !== null && botonpedircarta !== undefined) {
  botonpedircarta.addEventListener("click", nuevaCarta);
}
if (botonplantarse !== null && botonplantarse !== undefined) {
  botonplantarse.addEventListener("click", plantarse);
}
