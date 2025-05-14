import React, { useState } from "react";
import './Cart.css'
import { FaMinus,FaPlus } from "react-icons/fa";

export const ProductCart = ({productosCarrito}) => {

    const [cant, setCant] = useState(0)

    const productosUnicos = productosCarrito.filter(
        (producto, index, self) => index === self.findIndex(p => p.id === producto.id)
      )
    

    return (
          <>
            {productosUnicos.map(prod => (
              <div className="productCart" key={prod.id}>
                <img src={prod.image} alt="product" className='imagenProductoCart'/>
                <div className="descContainer">
                <span className='tituloProductoCart'>{prod.title}</span>
                <span className='precioProductoCart'>${prod.price}</span>
                <div className="buttonsContainer">
                    <FaMinus className="buttonAction"></FaMinus>
                    <span className="cantProd">{cant}</span>
                    <FaPlus className="buttonAction"></FaPlus>
                </div>
                </div>
              </div>
            ))}
          </>
        )
}