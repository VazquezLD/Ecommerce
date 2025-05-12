import React from "react";
import './Cart.css'
import { IoClose } from "react-icons/io5";

export const Totals = ({total}) => {

    const cart = document.getElementById('carrito')
    const cerrarCarrito = (e) => {
        e.preventDefault()
        cart.classList.add('oculto')
    }
    const totalFinal = Math.round(total)

    return (
        <div className="totalsContainer">
            <span className="totals">Total: $ {totalFinal}</span>
            <button className="closeButton">Comprar</button>
            <a href="" onClick={(e) => cerrarCarrito(e)}>
                <IoClose/>
            </a>
        </div>
    )
}