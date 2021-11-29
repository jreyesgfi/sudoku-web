import { Box } from "@mui/system";
import React from "react";
export default class Celda extends React.Component{
    constructor(props){
        super(props);
        this.x = props.x;
        this.y = props.y;
        // No podemos crear un hook en una clase
        this.resaltada = false;
        this.key = props.key;
        //this.ui = React.createElement('Box', { className: `celda ${this.resaltada && 'resaltada'}`, key:key});
    }


    setResaltada(resaltada){
        this.resaltada = resaltada;
        this.render();
    }

    render(){
        return(
            <Box className= {`celda ${this.resaltada && 'resaltada'}`} key={this.key}>
            </Box>
        )
    }
}