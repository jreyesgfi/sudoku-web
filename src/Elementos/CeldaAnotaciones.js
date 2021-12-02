import { Box } from "@mui/system";
import React from "react";

export default class CeldaAnotaciones extends React.Component {
    constructor(props) {
        super();
        this.numero = props.num;
        this.state = {numero:props.num, visible:props.estado};
    }


    comprobarVisibilidad(){
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