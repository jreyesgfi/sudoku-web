import Tablero from "../Views/Tablero";

export default class Fila {
    constructor(){
        this.hijosUI = [];
    }
    resaltarCeldas(num){
        this.hijosUI.map((celdaAResaltar)=>{
            Tablero.celdasResaltadas.push(celdaAResaltar);
            celdaAResaltar.resaltar(num);
        });
    }
}