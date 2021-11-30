import { Box } from "@mui/system";
import React from "react";
import Celda from "./Celda";
export default class Cuadrado extends React.Component{
    constructor(props){
        super(props);
        this.key = props.key;
        this.hijos = props.hijos;
        this.hijosUI = [];
        }


    setResaltada(resaltada){
        this.resaltada = resaltada;
        return this.ui
    }

    render(){
        return(
            <Box className= "cuadrado flex-grid ejemplo" key={this.key}>

                {this.hijos.map(celda=>
                    <Celda x={celda.x} y={celda.y} key={celda.key} cuadrado={this}>
                    </Celda>
                )}
            </Box>
        )
    }
}