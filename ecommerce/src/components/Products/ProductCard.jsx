import './ProductCard.css'
import React from 'react'
import { CiStar } from "react-icons/ci";

export const ProductCard = ({ productos }) => {
    console.log(productos);
    return (
      <>
        {productos.map(prod => (
          <div className="productCard" key={prod.id}>
            <img src={prod.image} alt="product" className='imagenProducto'/>
            <span className='precioProducto'>${prod.price}</span>
            <span className='tituloProducto'>{prod.title}</span>
            <div className="calificacionProducto">
              <CiStar/>
              <span>{prod.rating.rate}</span>
            </div>
          </div>
        ))}
      </>
    )
  }  