import React from "react";
import './ProductCard'

export const AddCartButton = ({children}) => {
    return(
        <button className="addCart">{children}</button>
    )
}