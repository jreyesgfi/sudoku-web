import { Box } from '@mui/system';
import React from 'react';
import Cuadrado from '../Elementos/Cuadrado';
import Fila from '../Elementos/Fila';
export default class Tablero extends React.Component {

    static tableroEnLista = [];
    static celdaClickada = null;
    static celdasResaltadas = [];
    static filas = {};

    // Métodos para cambiar las celdas marcadas
    static clickar(celda) {

        // Descoloreamos la celda clickada previa
        if (Tablero.celdaClickada) {
            try {Tablero.celdaClickada.desclickar() }
            catch {
                console.log('celda errónea, tablero');
            }
        }

        // Coloreamos de nuevo
        Tablero.celdaClickada = celda;
        Tablero.resaltarCeldas();
    }

    static resaltarCeldas(){

        // Dejamos de resaltar las previas
        Tablero.celdasResaltadas.map((celdaPrevia) => {
            try { celdaPrevia.desclickar() }
            catch {
                console.log('celda errónea, tablero');
            }
        });

        // Reiniciamos la lista
        Tablero.celdasResaltadas = [];

        // Rehacemos la lista y las resaltamos
        let cC = Tablero.celdaClickada
        cC.cuadrado.resaltarCeldas();
        cC.fila.resaltarCeldas();
    }



    render() {
        let cuadrados = [];
        let celdas = [];
        let key = 0;

        // Creamos el tablero vacío
        this.tableroEnLista = [];
        for (let i = 0; i < 9; i++) {
            Tablero.filas[i] = new Fila();


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
                let celda = { x: x, y: y, key: key };

                // Creamos las celdas gráficas
                //let celda = dataCelda.ui;
                celdas.push(celda);

                //this.tableroEnLista[x][y] = dataCelda;
                // tambíen podríamos indicar que dicha celda posee un elemento cuadrado asociado
                // console.log(x, y);
                key++;
            }

            // Si estamos en el último hijo creamos el cuadrado
            // Creamos los cuadrados
            // let cuadrado = React.createElement('Box',
            //     { className: "cuadrado flex-grid ejemplo", key: i },
            //     celdas);
            let cuadrado = { key: i, hijos: celdas.slice() }; // Creamos una copia con slice()
            celdas = [];
            cuadrados.push(cuadrado)
        }

        // Prueba de colorear
        //this.colorearCeldas([[0, 3],[1,2]]);


        return (
            <Box className="tablero flex-grid">
                {cuadrados.map(cuadrado =>
                    <Cuadrado key={cuadrado.key} hijos={cuadrado.hijos}>
                    </Cuadrado>
                )}
            </Box>
            // React.createElement('Box',
            //     { className: "tablero flex-grid" },
            //     cuadrados)
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

// export function CeldasMarcadas(){

//     const [celdaClickada,setCeldaClickada] = useState(0);
//     const [celdasResaltadas,setCeldasResaltadas] = useState([]);  
// }
