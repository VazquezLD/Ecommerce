import React from "react";
import './Categories.css'

export const Categories = () => {
    
    return(
        <div className="categories">
            <ul className="categoriesList">
                <li className="categoriesName"><a href="#">NEW</a></li>
                <li className="categoriesName"><a href="#">WOMEN CLOTHING</a></li>
                <li className="categoriesName"><a href="#">MEN CLOTHING</a></li>
                <li className="categoriesName"><a href="#">ELECTRONICS</a></li>
                <li className="categoriesName"><a href="#">JEWELERY</a></li>
                <li className="categoriesName"><a href="#">ABOUT</a></li>
            </ul>
        </div>
    )
}