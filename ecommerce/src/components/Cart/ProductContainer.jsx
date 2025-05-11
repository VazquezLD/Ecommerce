import React from "react";
import './Cart.css'

export const ProductContainer = ({children}) => {
    return(
        <>
        <span className="yourProducts">Tus productos</span>
        <div className="productContainer">
            {children}
        </div>
        </>
        
    )
}