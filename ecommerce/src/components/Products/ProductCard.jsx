import './ProductCard.css'
import React from 'react'

export const ProductCard = ({ productos }) => {
    console.log(productos);
    return (
      <>
        {productos.map(prod => (
          <div className="productCard" key={prod.id}>
            <img src={prod.image} alt="product" className='imagenProducto'/>
            <span className='spanProducto'>{prod.price}</span>
          </div>
        ))}
      </>
    )
  }  