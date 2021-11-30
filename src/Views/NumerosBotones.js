import { Box } from "@mui/system";
import React from "react";
import Tablero from "./Tablero";

export default class NumerosBotones extends React.Component{

    constructor(props){
        super(props);
        this.numero = props.numero + 1;
        this.clickar = this.clickar.bind(this);
    }

    clickar(){
        try{Tablero.celdaClickada.cambiarNumero(this.numero);}
        catch(error){
            alert(error);
        }
    }
    render(){
        return(
            <Box className="numero-boton" onClick={this.clickar}>
                {`${this.numero}`}
            </Box>
        )
    }
}