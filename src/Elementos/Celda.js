import reactDom from "react-dom";
import { ClassNames } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";
import Tablero, { CeldasMarcadas } from "../Views/Tablero";
export default class Celda extends React.Component {
    constructor(props) {
        super(props);
        this.x = props.x;
        this.y = props.y;
        // No podemos crear un hook en una clase
        this.key = props.key;
        
        // Lo relacionamos con el cuadrado
        this.cuadrado = props.cuadrado;
        this.cuadrado.hijosUI.push(this);

        // Lo relacionamos con su fila
        this.fila = Tablero.filas[this.x];
        this.fila.hijosUI.push(this);

        // Lo relacionamos con su columna
        this.columna = Tablero.columnas[this.y];
        this.columna.hijosUI.push(this);
        //console.log(this.Linea.hijosUI.x);


        this.resaltar = this.resaltar.bind(this);
        this.click = this.click.bind(this);
        this.state = { clickada:false, resaltada: false};
        //this.ui = React.createElement('Box', { className: `celda ${this.resaltada && 'resaltada'}`, key:key});
    }

    resaltar() {
        this.setState({resaltada:true});
    }

    click() {
        Tablero.clickar(this);
        this.setState({clickada: true});
    }

    desclickar(){
        this.setState({clickada: false, resaltada:false});
    }
    // click() {
    //     function setCeldaClickada(celda){
    //         if (celdaClickada){
    //             try{celdaClickada.desclickar()}
    //             catch{
    //                 console.log('celda errónea, tablero');
    //             }
    //         }
    //         celdaClickada = celda; 
    //     }
    
    //     function setCeldasResaltadas(celda){
    //         if (celdaClickada == celda){
    //             celdasResaltadas.map((celda)=>{
    //                 try{celdaClickada.desclickar()}
    //                 catch{
    //                     console.log('celda errónea, tablero');
    //                 }
    //             });
    //             celdasResaltadas = [];
    //         } else{
    //             celdasResaltadas.push(celda);
    //         }
    //     }
    // }



    render() {
        return(
        <Box className={`celda ${this.state.resaltada && 'resaltada'} ${this.state.clickada && 'clickada'}`} onClick={this.click} >
        </Box>
        )
    }
}
