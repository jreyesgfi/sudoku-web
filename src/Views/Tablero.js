import { Box } from '@mui/system';
import React from 'react';
export default class Tablero {
    static cuadradosEnLista = [];

    static construirTablero() {
        let tablero = null;
        let cuadrados = [];
        let celdas = [];
        let key = 0;

        for (let i = 0; i < 9; i++) {

            this.cuadradosEnLista.push([])

            for (let j = 0; j < 9; j++) {
                // Creamos las celdas
                let celda = React.createElement('Box', { className: "celda", key:key});
                console.log(this.cuadradosEnLista[i]);
                celdas.push(celda);
                this.cuadradosEnLista[i].push(celda);
                // aquí debemos añadir la celda a la lista, debemos tener en cuenta que
                // la fila no es a priori correcta
                // tambíen podríamos indicar que dicha celda posee un elemento cuadrado asociado
                console.log(i,j);
                key++;
            }

            // Si estamos en el último hijo creamos el cuadrado
            // Creamos los cuadrados
            let cuadrado = React.createElement('Box',
                { className: "cuadrado flex-grid ejemplo", key:i},
                celdas);
            celdas = [];
            cuadrados.push(cuadrado)
        }
        return (
            tablero = React.createElement('Box',
                { className: "tablero flex-grid" },
                cuadrados)
        );
    }
}