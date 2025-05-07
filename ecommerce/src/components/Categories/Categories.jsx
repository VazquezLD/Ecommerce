import React from "react";
import './Categories.css'
import { CategoriesName } from "./CategoriesName";

export const Categories = ( {setProductos} ) => {


    const handleClick = (categoria) => {
        
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
                <CategoriesName><a href="#" onClick={() => handleClick('')}>NEW</a></CategoriesName>
                <CategoriesName><a href="#" onClick={() => handleClick("women's clothing")}>WOMEN CLOTHING</a></CategoriesName>
                <CategoriesName><a href="#" onClick={() => handleClick("men's clothing")}>MEN CLOTHING</a></CategoriesName>
                <CategoriesName><a href="#" onClick={() => handleClick("electronics")}>ELECTRONICS</a></CategoriesName>
                <CategoriesName><a href="#" onClick={() => handleClick("jewelery")}>JEWELERY</a></CategoriesName>
                <CategoriesName><a href="#">ABOUT</a></CategoriesName>
            </ul>
        </div>
    )
}