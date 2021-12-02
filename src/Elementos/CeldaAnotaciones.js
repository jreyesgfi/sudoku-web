import { Box } from "@mui/system";
import React from "react";

export default class CeldaAnotaciones extends React.Component {
    constructor(props) {
        super();
        this.numero = props.num;
        this.cambiarEstado = this.cambiarEstado.bind(this);
        console.log(props.estado(this.numero))
        this.estado = props.estado;
        this.state = {numero:props.num, visible:this.estado(this.numero)};
    }

    cambiarEstado(bool){
        this.setState({visible:bool});
    }


    comprobarVisibilidad(){
        if (this.estado(this.numero)){
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