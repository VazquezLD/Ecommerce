import React from "react";
import { Reason } from "./Reason";
import entregaIcon from '../../icons/entregaIcon.png';
import proteccionIcon from '../../icons/proteccionIcon.png';
import repartidorIcon from '../../icons/repartidorIcon.png';
import signoIcon from '../../icons/signoIcon.png';

export const ReasonsContainer = () => {
    return(
        <div className="reasonsContainer">

            <Reason pathImg={entregaIcon} titulo={'Máxima satisfacción'}
             description={'Te aseguramos la maxima calidad de productos'}>
             </Reason>

            <Reason pathImg={repartidorIcon} titulo={'¿Cómo comprar?'} 
            description={'Te acompañamos en tu proceso de compra y elección'}>
            </Reason>

            <Reason pathImg={proteccionIcon} titulo={'Entregas seguras'} 
            description={'Nos aseguramos del seguimiento de tu entrega en todo momento'}>
            </Reason>
            
            <Reason pathImg={signoIcon} titulo={'Atención'} 
            description={'Estamos a disposición las 24hs para responder tus dudas y consultas'}>
            </Reason>

        </div>
    )
}