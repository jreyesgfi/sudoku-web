import reactDom from "react-dom";
import { ClassNames } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";
export default class Celda extends React.Component {
    constructor(props) {
        super(props);
        this.x = props.x;
        this.y = props.y;
        // No podemos crear un hook en una clase
        this.key = props.key;


        this.resaltar = this.resaltar.bind(this);
        this.state = { resaltada: false};
        //this.ui = React.createElement('Box', { className: `celda ${this.resaltada && 'resaltada'}`, key:key});
    }

    resaltar() {
        console.log(this.state.resaltada)
        let valor = this.state.resaltada? null:true;
        this.setState({
          resaltada: valor
        });
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
        <Box className={`celda ${this.state.resaltada && 'resaltada'}`} onClick={this.resaltar} >
        </Box>
        )
    }
}