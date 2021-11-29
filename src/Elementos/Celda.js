import { Box } from "@mui/system";
import React from "react";
export default class Celda extends React.Component{
    constructor(x,y,key){
        super();
        this.x = x;
        this.y = y;
        // No podemos crear un hook en una clase
        this.resaltada = false;
        this.key = key;
        //this.ui = React.createElement('Box', { className: `celda ${this.resaltada && 'resaltada'}`, key:key});
    }


    setResaltada(resaltada){
        this.resaltada = resaltada;
        return this.ui
    }

    render(){
        return(
            <Box className={`celda ${this.resaltada && 'resaltada'}`} key={this.key} >
                2
            </Box>
        )
    }
}