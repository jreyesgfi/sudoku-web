import React from "react";
export default class Celda{
    constructor(x,y,key){
        this.x = x;
        this.y = y;
        // No podemos crear un hook en una clase
        this.resaltada = false;
        this.ui = React.createElement('Box', { className: `celda ${this.resaltada && 'resaltada'}`, key:key});
    }


    setResaltada(resaltada){
        this.resaltada = resaltada;
        return this.ui
    }
}