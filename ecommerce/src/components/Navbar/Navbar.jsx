import React from "react";
import './Navbar.css'
import { CiMenuBurger } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from "react-icons/ci";
import { InputProduct } from "./InputProduct";

export const Navbar = ( {setProductos} ) => {
    
    return(
        <header className="navbar">
            <span className="navbarSpan">SHOPPING</span>
            <InputProduct setProductos={setProductos}/>
            <ul className="navbarLinks">
                <li className="navbarLink"><a href="#"><CiSearch/></a></li>
                <li className="navbarLink"><a href="#"><CiShoppingCart/></a></li>
                <li className="navbarLink"><a href="#"><CiMenuBurger/></a></li>
            </ul>
        </header>
    )

}