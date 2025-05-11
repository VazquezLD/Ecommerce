import React from "react";
import './LinkContainer.css'
import { LinkBox } from "./Link";
import descuento from '../../icons/descuento.png'
import envio from '../../icons/envio.png'
import sucursal from '../../icons/sucursal.png'
import tarjeta from '../../icons/tarjeta.png'

export const LinkContainer = () => {
    return(
        <div className="linkContainer">
            <LinkBox img={descuento} titulo={'Nuestros descuentos'}/>
            <LinkBox img={envio} titulo={'Métodos de entrega'}/>
            <LinkBox img={sucursal} titulo={'Econtrá tu sucursal'}/>
            <LinkBox img={tarjeta} titulo={'Beneficios bancarios'}/>
        </div>
    )
}