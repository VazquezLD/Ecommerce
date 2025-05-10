import React, { useState } from "react";
import './Navbar.css'
import { CiMenuBurger } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from "react-icons/ci";
import { InputProduct } from "./InputProduct";

export const Navbar = ( {setProductos, agregarProducto, productos} ) => {

    return(
        <header className="navbar">
            <span className="navbarSpan">SHOPPING</span>
            <InputProduct setProductos={setProductos} productos={productos}/>
            <ul className="navbarLinks">
                <li className="navbarLink"><a href="#"><CiSearch/></a></li>
                
                <li className="navbarLink">
                    <div className="cart-container">
                    <i className="cart-icon"><CiShoppingCart/></i>
                    <span className="cart-count">{agregarProducto}</span>
                    </div>
                </li>
                <li className="navbarLink"><a href="#"><CiMenuBurger/></a></li>
            </ul>
        </header>
    )

}