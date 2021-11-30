import { Box } from "@mui/system";
import React from "react";
import NumerosBotones from "./NumerosBotones";

export default class PanelNumerico extends React.Component{

    constructor(){
        super();
        // this.numeros = {};
        this.numeros =[];
        for (let i = 0; i < 9; i++) {
            this.numeros.push(i);
            // this.numeros[i] = new NumerosBotones(i);
        }
    }
    render(){
        return(
            <Box className="panel-numerico flex-grid">
                {this.numeros.map((i)=>
                <NumerosBotones numero={i}>
                </NumerosBotones>
                )}
            </Box>
        )
    }
}