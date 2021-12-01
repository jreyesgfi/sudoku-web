import Tablero from "./Views/Tablero";

// Add event listener on keypress
export function tecladoListener(){
    document.addEventListener('keyup', (event) => {
        Tablero.teclaApretada(event.key);
    }, false);
}