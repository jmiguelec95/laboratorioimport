import "./style.css";

import {
  nuevaCarta,
  plantarse,
  actualizarPuntuacionEnPantalla
} from "./ui";

const botonpedircarta = document.getElementById("pedir_carta");
const botonplantarse = document.getElementById("plantarse");

if (botonpedircarta !== null && botonpedircarta !== undefined) {
  botonpedircarta.addEventListener("click", nuevaCarta);
}
if (botonplantarse !== null && botonplantarse !== undefined) {
  botonplantarse.addEventListener("click", plantarse);
}
document.addEventListener("DOMContentLoaded", actualizarPuntuacionEnPantalla);