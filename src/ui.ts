import {
  partida, 
  condiciondevictoria,
  ESTADOS,
} from "./model";

import {
  actualizarEstado,
  actualizarPuntuacion,
  generarCartaAleatoria,
} from "./motor";

const puntuacion_elemento = document.getElementById("puntuacion");
const botonpedircarta = document.getElementById("pedir_carta");
const img_carta = document.getElementById("carta");
const botonplantarse = document.getElementById("plantarse");
const mensaje_elemento = document.getElementById("mensaje");

export const actualizarPuntuacionEnPantalla = () => {
  actualizarPuntuacion();
  if (partida.puntuacion <= condiciondevictoria) {
      if (puntuacion_elemento !== null && puntuacion_elemento !== undefined) {
        puntuacion_elemento.innerText = `Puntuación: ${partida.puntuacion}`;
      };}
  else {
      if (puntuacion_elemento !== null && puntuacion_elemento !== undefined) {
        puntuacion_elemento.innerText = `GAME OVER, Te has pasado con ${partida.puntuacion} puntos.`;
      desactivarBotones();      }
    }
  }

const mensajeplantarse = (mensaje: string) => {
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
export const plantarse = () => {
  const situacion: ESTADOS = actualizarEstado();
  switch (situacion) {
    case "MENORQUECINCO":
      mensajeplantarse(`Has sido muy conservador`);
      desactivarBotones();
      break;
    case "CINCO":
      mensajeplantarse(`Te ha entrado el canguelo eh?`);
      desactivarBotones();
      break;
    case "ENTRESEISYSIETE":
      mensajeplantarse(`Casi casi...`);
      desactivarBotones();
      break;
    case "SIETEYMEDIO":
      mensajeplantarse(`¡Lo has clavado! ¡Enhorabuena!`);
      desactivarBotones();
      break;
  }
};

const mostrarCarta = () => {
  if (
    img_carta !== null &&
    img_carta !== undefined &&
    img_carta instanceof HTMLImageElement
  ) {
    img_carta.src = `/src/assets/carta${partida.carta}.jpg`;
  }
};

export const nuevaCarta = () => {
  generarCartaAleatoria();
  actualizarPuntuacionEnPantalla();
  mostrarCarta();
};
