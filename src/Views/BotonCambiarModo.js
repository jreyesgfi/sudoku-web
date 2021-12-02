import { Box } from "@mui/system";
import React from "react";
import Tablero from "./Tablero";

export default class BotonCambiarModo extends React.Component {

    constructor(props) {
        super(props);
        this.state={estado:props.estado}
        this.clickar = this.clickar.bind(this);
    }

    clickar() {
        try {
            Tablero.celdaClickada.cambiarModo();
        }
        catch (error) {
            alert(error)
            alert('No hay ninguna celda clickada');
        }
    }
    render() {
        return (
            <Box className="contenedor-modo-boton">
                <div className="texto-modo-boton">
                    ¡Ahora puedes realizar anotaciones!
                </div>
                <Box className={`modo-boton ${this.state.estado && 'estado'} `}
                    onClick={this.clickar}>
                </Box>
            </Box>
        )
    }
}