import './ProductCard.css'
import React from 'react'
import { CiStar } from "react-icons/ci";
import { AddCartButton } from './AddCart';

export const ProductCard = ({ productos }) => {
    
    return (
      <>
        {productos.map(prod => (
          <div className="productCard" key={prod.id}>
            <img src={prod.image} alt="product" className='imagenProducto'/>
            <span className='precioProducto'>${prod.price}</span>
            <span className='tituloProducto'>{prod.title}</span>
            <div className="calificacionProducto">
              <span><CiStar/>{prod.rating.rate}</span>
              <AddCartButton>Agregar al carrito</AddCartButton>
            </div>
          </div>
        ))}
      </>
    )
  }  