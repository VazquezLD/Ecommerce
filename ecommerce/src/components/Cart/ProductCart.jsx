import React from "react";
import './Cart.css'

export const ProductCart = ({productosCarrito}) => {

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
                </div>
              </div>
            ))}
          </>
        )
}