import React from "react";
import './Cart.css'

export const CartProducts = ({children}) => {
    return(
        <div className="cartProducts">{children}</div>
    )
}