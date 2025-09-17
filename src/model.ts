export type ESTADOS = "MENORQUECINCO" | "CINCO" | "ENTRESEISYSIETE" | "MAYORQUESIETEYMEDIO" | "SIETEYMEDIO";

interface Partida { 
    puntuacion: number;
    carta: number;
}

export const partida: Partida = {
    puntuacion: 0,
    carta: 0
};

export const condiciondevictoria: number = 7.5;