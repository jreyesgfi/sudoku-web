import { Box } from '@mui/system';
import React from 'react';
import Cuadrado from '../Elementos/Cuadrado';
import Fila from '../Elementos/Fila';
export default class Tablero extends React.Component {

    static tableroEnLista = [];
    static celdaClickada = null;
    static celdasResaltadas = [];
    static filas = {};
    static columnas = {};


    // Método para registrar apretar teclas
    static teclaApretada(tecla) {
        if (tecla == "Escape") {
            Tablero.deseleccionarCeldas();
            if (this.celdaClickada) {
                Tablero.celdaClickada.desclickar();
                Tablero.celdaClickada = null;
            }
        }

        if (Tablero.celdaClickada) {
            // Aplicamos comprobación estándar de si el string es numérico
            const regex = /^[0-9]*$/;
            if (regex.test(tecla) == true) {
                let num = parseInt(tecla, 10);
                Tablero.celdaClickada.cambiarNumero(num);
            }
        }

    }

    // Métodos para cambiar las celdas marcadas
    static clickar(celda) {

        // Descoloreamos la celda clickada previa
        if (Tablero.celdaClickada) {
            Tablero.celdaClickada.desclickar();
            // Si es la segunda vez que clickamos salimos de la selección
            if (celda == Tablero.celdaClickada) {
                // Deseleccionamos todas
                Tablero.deseleccionarCeldas();

                Tablero.celdaClickada = null;
                // Indicamos que la celda NO se debe colorear como clickada 
                return false;
            }
        }
        // Coloreamos de nuevo
        Tablero.celdaClickada = celda;
        Tablero.resaltarCeldas();

        // Indicamos que la celda se debe colorear como clickada
        return true;
    }

    static scapeAction(){
        Tablero.deseleccionarCeldas();
        if (Tablero.celdaClickada){
            Tablero.celdaClickada = null;
        }

        
    }

    static resaltarCeldas() {

        // Dejamos de resaltar las previas
        Tablero.deseleccionarCeldas();

        // Reiniciamos la lista
        Tablero.celdasResaltadas = [];

        // Rehacemos la lista y las resaltamos
        let celClick = Tablero.celdaClickada;

        // Recuperamos el valor que posee la celda clickada
        let num = celClick.preguntarNumero();
        num = num ? num : 0;

        celClick.cuadrado.resaltarCeldas(num);
        celClick.fila.resaltarCeldas(num);
        celClick.columna.resaltarCeldas(num);
    }
    static deseleccionarCeldas() {
        Tablero.celdasResaltadas.map((celdaPrevia) => {
            try { celdaPrevia.deseleccionar() }
            catch {
                console.log('celda errónea, tablero');
            }
        });
    }



    render() {
        let cuadrados = [];
        let celdas = [];
        let key = 0;

        // Creamos el tablero vacío
        this.tableroEnLista = [];
        for (let i = 0; i < 9; i++) {
            Tablero.filas[i] = new Fila();
            Tablero.columnas[i] = new Fila();


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
