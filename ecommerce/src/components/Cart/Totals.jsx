import React from "react";
import './Cart.css'

export const Totals = ({total}) => {
    return (
        <div className="totalsContainer">
            <span className="totals">Total: ${total}</span>
            <button className="closeButton">Comprar</button>
        </div>
    )
}