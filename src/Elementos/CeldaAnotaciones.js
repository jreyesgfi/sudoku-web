import { Box } from "@mui/system";
import React from "react";

export default class CeldaAnotaciones extends React.Component {
    constructor(props) {
        super();
        console.log("he sido creada")
        this.numero = props.num;
        this.state = {numero:props.num, visible:true};
    }


    comprobarVisibilidad(){
        console.log("hemos llegado a aquí")
        if (this.state.visible){
            return this.state.numero;
        }
        return
    }
    render(){
        return(
            <Box className="celda-anotaciones">
                {this.comprobarVisibilidad()}
            </Box>
        )
    }
}