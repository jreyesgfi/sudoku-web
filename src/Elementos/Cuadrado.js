import { Box } from "@mui/system";
import React from "react";
export default class Cuadrado extends React.Component{
    constructor(id, hijos){
        super();
        this.id = id;
        this.hijos = hijos;
        }


    setResaltada(resaltada){
        this.resaltada = resaltada;
        return this.ui
    }

    render(){
        return(
            <Box className= "cuadrado flex-grid ejemplo" key={this.id}>
                {this.hijos[0]}
            </Box>
        )
    }
}