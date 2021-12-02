import reactDom from "react-dom";
import { ClassNames } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";
import Tablero, { CeldasMarcadas } from "../Views/Tablero";
import CeldaAnotaciones from "./CeldaAnotaciones";
import BotonCambiarModo from "../Views/BotonCambiarModo";
export default class Celda extends React.Component {
    constructor(props) {
        super(props);
        this.x = props.x;
        this.y = props.y;
        // No podemos crear un hook en una clase
        this.key = props.key;

        // Lo relacionamos con el cuadrado
        this.cuadrado = props.cuadrado;
        this.cuadrado.hijosUI.push(this);

        // Lo relacionamos con su fila
        this.fila = Tablero.filas[this.x];
        this.fila.hijosUI.push(this);

        // Lo relacionamos con su columna
        this.columna = Tablero.columnas[this.y];
        this.columna.hijosUI.push(this);
        //console.log(this.Linea.hijosUI.x);


        this.resaltar = this.resaltar.bind(this);
        this.clickar = this.clickar.bind(this);
        this.desclickar = this.desclickar.bind(this);
        this.cambiarNumero = this.cambiarNumero.bind(this);
        this.cambiarModo = this.cambiarModo.bind(this);
        this.state = { clickada: false, resaltada: false, repetida: false, numero: null, modoAnotaciones: false };
        if (props.numero) { this.setState({ numero: props.numero }) }
        //this.ui = React.createElement('Box', { className: `celda ${this.resaltada && 'resaltada'}`, key:key});

        // Diccionario de elementos en anotaciones
        this.celdasPeques = [];
        this.anotaciones = {}
        for (let i = 1; i < 10; i++) {
            this.anotaciones[i] = false;
            this.celdasPeques.push(
                <CeldaAnotaciones num={i} estado={(numero)=>{
                    return this.anotaciones[numero];
                }}>
                </CeldaAnotaciones>
            )
        }
    }

    resaltar(num) {
        if (this.state.numero === num) {
            this.setState({ repetida: true })
        } else {
            this.setState({ resaltada: true });
        }

    }

    clickar() {
        this.setState({
            // Comprobamos si ya estaba clickado este cuadrado
            clickada: Tablero.clickar(this)
        });
    }

    deseleccionar() {
        this.setState({ resaltada: false, repetida: false });
    }
    desclickar() {
        this.setState({ clickada: false });
    }

    cambiarNumero(newNumero) {

        // Comprobamos en que modo estamos
        if (!this.state.modoAnotaciones) {
            // Como los estados tardan un tiempo en cambiar,
            // llamamos a tablero.resaltar como callback de setState
            if (this.state.numero != newNumero) {
                this.setState({ numero: newNumero }, () => {
                    Tablero.resaltarCeldas()
                })
            }
            // Si el número estaba ya lo quitamos
            else {
                this.setState({ numero: null }, () => {
                    Tablero.resaltarCeldas()
                })
            }
        // Si estamos en anotaciones editamos nuestro diccionario
        } else {
            this.anotaciones[newNumero] = !this.anotaciones[newNumero];
            this.setState({modoAnotaciones:false},()=>
            {
                this.setState({modoAnotaciones:true});
            });
        }

    }

    preguntarNumero() {
        return this.state.numero;
    }

    // clickar() {
    //     function setCeldaClickada(celda){
    //         if (celdaClickada){
    //             try{celdaClickada.desclickar()}
    //             catch{
    //                 console.log('celda errónea, tablero');
    //             }
    //         }
    //         celdaClickada = celda; 
    //     }

    //     function setCeldasResaltadas(celda){
    //         if (celdaClickada == celda){
    //             celdasResaltadas.map((celda)=>{
    //                 try{celdaClickada.desclickar()}
    //                 catch{
    //                     console.log('celda errónea, tablero');
    //                 }
    //             });
    //             celdasResaltadas = [];
    //         } else{
    //             celdasResaltadas.push(celda);
    //         }
    //     }
    // }

    // Comprobamos si estamos en el modo anotaciones

    cambiarModo() {
        this.setState({ 
            modoAnotaciones: !this.state.modoAnotaciones,
            numero:null
        },()=>{
            Tablero.scapeAction()
            Tablero.clickar(this)
        });

        //BotonCambiarModo.cambiarEstado(false);
    }



    determinarModo() {
        if (!this.state.modoAnotaciones) {
            return this.state.numero
        }
        return (
            this.celdasPeques.map((celda) => celda)
        )

    }


    render() {
        console.log(this.x,this.y, this.anotaciones);
        return (
            <Box className={`celda flex-grid
        ${this.state.resaltada && 'resaltada'} 
        ${this.state.clickada && 'clickada'}
        ${this.state.repetida && 'repetida'}
        `} onClick={this.clickar} >
                {this.determinarModo()
                }
            </Box>
        )
    }
}
