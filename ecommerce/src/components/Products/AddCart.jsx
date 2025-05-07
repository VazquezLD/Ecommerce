import React from "react";
import './ProductCard'

export const AddCartButton = ({children, setAgregarProducto, setProductoCarrito, producto}) => {

    const agregarAlCarrito = (producto) => {
        setProductoCarrito(prevCarrito => [...prevCarrito, producto])
      }

    const handleClick = () => {
        setAgregarProducto(prevCount => prevCount + 1)
        agregarAlCarrito(producto)
      }

    return(
        <button className="addCart" onClick={handleClick}>{children}</button>
    )
}