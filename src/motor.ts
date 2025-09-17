import {
  partida, 
} from "./model";


export const actualizarEstado = () => {
  if (partida.puntuacion > 7.5) return "MAYORQUESIETEYMEDIO";
  if (partida.puntuacion === 7.5) return "SIETEYMEDIO";
  if (partida.puntuacion > 5) return "ENTRESEISYSIETE";
  if (partida.puntuacion === 5) return "CINCO";
  return "MENORQUECINCO";
};

export const actualizarPuntuacion = () => {
  let valor_carta: number = 0;
  if (partida.carta > 7) {
    valor_carta = 0.5;
  } else {
    valor_carta = partida.carta;
  }
  partida.puntuacion += valor_carta;
};

export const generarCartaAleatoria = () => {
    partida.carta = Math.floor(Math.random() * 10) + 1;
  if (partida.carta > 7) {
    partida.carta = partida.carta + 2;
  }
}