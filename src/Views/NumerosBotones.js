import { Box } from "@mui/system";
import React from "react";

export default class NumerosBotones extends React.Component{

    constructor(props){
        super(props);
        this.numero = props.numero;
    }
    render(){
        return(
            <Box className="numero-boton flex-item">
                {`${this.numero}`}
            </Box>
        )
    }
}