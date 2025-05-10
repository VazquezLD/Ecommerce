import React, { useState, useEffect } from "react";
import './Categories.css'
import { CategoriesName } from "./CategoriesName";

export const Categories = ( {setProductos, productos} ) => {

    const [copia, setCopia] = useState([])

    useEffect(() => {
        if (copia.length === 0 && productos.length > 0) {
            setCopia(productos)
        }
    }, [productos])
 

    
    const handleClick = (e, categoria) => {
        e.preventDefault()
        
        if(categoria === 'new'){
            setProductos(copia)
        }else{
            const filtradosPorCategoria = copia.filter((prod) => {
            return prod.category.toLowerCase() === (categoria.toLowerCase())
        })
        setProductos(filtradosPorCategoria)
        }
}

    return(
        <div className="categories">
            <ul className="categoriesList">
                <CategoriesName><a href="#" onClick={(e) => handleClick(e, 'new')}>NEW</a></CategoriesName>
                <CategoriesName><a href="#" onClick={(e) => handleClick(e, "women's clothing")}>WOMEN CLOTHING</a></CategoriesName>
                <CategoriesName><a href="#" onClick={(e) => handleClick(e, "men's clothing")}>MEN CLOTHING</a></CategoriesName>
                <CategoriesName><a href="#" onClick={(e) => handleClick(e, "electronics")}>ELECTRONICS</a></CategoriesName>
                <CategoriesName><a href="#" onClick={(e) => handleClick(e, "jewelery")}>JEWELERY</a></CategoriesName>
                <CategoriesName><a href="#footer">ABOUT</a></CategoriesName>
            </ul>
        </div>
    )
}