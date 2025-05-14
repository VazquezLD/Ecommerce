import { ProductCard } from './ProductCard'
import './ProductsContainer.css'
import React from 'react'

export const ProductsContainer = ( {productos, setAgregarProducto, setProductoCarrito} ) => {

    return(
        <div className='productsContainer' id='productsContainer'>
            <ProductCard productos={productos} setAgregarProducto={setAgregarProducto} setProductoCarrito={setProductoCarrito}/>
        </div>
    )
}