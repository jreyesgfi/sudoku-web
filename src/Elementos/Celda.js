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


        this.resaltar = this.resaltar.bind(this);
        this.click = this.click.bind(this);
        this.state = { clickada:false, resaltada: false};
        //this.ui = React.createElement('Box', { className: `celda ${this.resaltada && 'resaltada'}`, key:key});
    }

    resaltar() {
        console.log(this.state.resaltada)
        let valor = this.state.resaltada? null:true;
        this.setState({
          resaltada: valor
        });
    }

    click() {
        Tablero.clickar(this);
        this.setState({clickada: true});
    }

    desclickar(){
        this.setState({clickada: false});
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
        <Box className={`celda  ${this.state.clickada && 'clickada'}`} onClick={this.click} >
        </Box>
        )
    }
}
//${this.state.resaltada && 'resaltada'}