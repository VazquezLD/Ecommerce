import React from "react";
import './Cart.css'

export const ProductContainer = ({children}) => {
    return(
        <>
        <div className="yourProducts">
            <span className="">Tus productos</span>
        </div>
        <div className="productContainer">
            {children}
        </div>
        </>
        
    )
}