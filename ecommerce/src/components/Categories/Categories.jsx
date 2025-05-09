import React from "react";
import './Categories.css'
import { CategoriesName } from "./CategoriesName";

export const Categories = ( {setProductos} ) => {


    const handleClick = (e, categoria) => {
        e.preventDefault()
        const fecthProductosCategoria = async () => {
            
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
    
            const filtradosCategoria = data.filter((prod) =>
                prod.category.includes(categoria)
              );
          
            setProductos(filtradosCategoria);
    }
    fecthProductosCategoria()
}

    return(
        <div className="categories">
            <ul className="categoriesList">
                <CategoriesName><a href="#" onClick={(e) => handleClick(e, '')}>NEW</a></CategoriesName>
                <CategoriesName><a href="#" onClick={(e) => handleClick(e, "women's clothing")}>WOMEN CLOTHING</a></CategoriesName>
                <CategoriesName><a href="#" onClick={(e) => handleClick(e, "men's clothing")}>MEN CLOTHING</a></CategoriesName>
                <CategoriesName><a href="#" onClick={(e) => handleClick(e, "electronics")}>ELECTRONICS</a></CategoriesName>
                <CategoriesName><a href="#" onClick={(e) => handleClick(e, "jewelery")}>JEWELERY</a></CategoriesName>
                <CategoriesName><a href="#">ABOUT</a></CategoriesName>
            </ul>
        </div>
    )
}