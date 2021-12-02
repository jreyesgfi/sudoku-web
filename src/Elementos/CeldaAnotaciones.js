import { Box } from "@mui/system";
import React from "react";

export default class CeldaAnotaciones extends React.Component {
    constructor(props) {
        super();
        this.numero = props.num;
        this.state = {visible:false};
    }
    render(){
        return(
        <Box className="celda-anotaciones">
            {()=>{
                if (this.state.visible){
                    return this.numero;
                }
                return
            }}
        </Box>
        )
    }
}