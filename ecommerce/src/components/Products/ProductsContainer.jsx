import { ProductCard } from './ProductCard'
import './ProductsContainer.css'
import React from 'react'

export const ProductsContainer = ( {productos} ) => {
    return(
        <div className='productsContainer'>
            <ProductCard productos = {productos} />
        </div>
    )
}