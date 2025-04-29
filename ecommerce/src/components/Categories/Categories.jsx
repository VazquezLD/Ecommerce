import React from "react";
import './Categories.css'
import { CategoriesName } from "./CategoriesName";

export const Categories = () => {
    
    return(
        <div className="categories">
            <ul className="categoriesList">
                <CategoriesName><a href="#">NEW</a></CategoriesName>
                <CategoriesName><a href="#">WOMEN CLOTHING</a></CategoriesName>
                <CategoriesName><a href="#">MEN CLOTHING</a></CategoriesName>
                <CategoriesName><a href="#">ELECTRONICS</a></CategoriesName>
                <CategoriesName><a href="#">JEWELERY</a></CategoriesName>
                <CategoriesName><a href="#">ABOUT</a></CategoriesName>
            </ul>
        </div>
    )
}