import { Box } from '@mui/system';
import React from 'react';
import Celda from '../Elementos/Celda';
export default class Tablero {
    static tableroEnLista = [];

    static construirTablero() {
        let tablero = null;
        let cuadrados = [];
        let celdas = [];
        let key = 0;

        // Creamos el tablero vacío
        this.tableroEnLista = [];
        for (let i = 0; i < 9; i++) {
            this.tableroEnLista.push([]);
            for (let j = 0; j < 9; j++) {
                this.tableroEnLista[i].push(j)
            }
        }


        for (let i = 0; i < 9; i++) {

            this.tableroEnLista.push([])

            for (let j = 0; j < 9; j++) {

                // Creamos la celda como información
                let x = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                let y = i % 3 * 3 + j % 3;
                let dataCelda = new Celda(x, y, key)

                // Creamos las celdas gráficas
                let celda = dataCelda.ui;
                celdas.push(celda);

                this.tableroEnLista[x][y] = dataCelda;
                // tambíen podríamos indicar que dicha celda posee un elemento cuadrado asociado
                // console.log(x, y);
                key++;
            }

            // Si estamos en el último hijo creamos el cuadrado
            // Creamos los cuadrados
            let cuadrado = React.createElement('Box',
                { className: "cuadrado flex-grid ejemplo", key: i },
                celdas);
            celdas = [];
            cuadrados.push(cuadrado)
        }

        // Prueba de colorear
        this.colorearCeldas([[0, 3],[1,2]]);


        return (
            tablero = React.createElement('Box',
                { className: "tablero flex-grid" },
                cuadrados)
        );
    }

    static colorearCeldas(listaDeCoordenadas) {
        for (let celda of this.tableroEnLista) {
            celda.resaltada = false;
        }
        if (listaDeCoordenadas) {
            if (listaDeCoordenadas.length > 1) {
                for (let coord of listaDeCoordenadas) {
                    console.log(coord[0]);
                    this.tableroEnLista[coord[0]][coord[1]].resaltada = true;
                }
            } else {
                let coord = listaDeCoordenadas;
                this.tableroEnLista[coord[0]][coord[1]].resaltada = true;
            }
        }
    }
}