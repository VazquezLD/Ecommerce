import React, { useState } from "react";
import './Navbar.css'
import { CiMenuBurger } from 'react-icons/ci';
import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from "react-icons/ci";
import { InputProduct } from "./InputProduct";

export const Navbar = ( {setProductos, agregarProducto, productos} ) => {

    const cart = document.getElementById('carrito')
    const mostrarCarrito = () => {
        cart.classList.remove('oculto')
    }


    return(
        <header className="navbar">
            <span className="navbarSpan">ShoppingApp</span>
            <InputProduct setProductos={setProductos} productos={productos}/>
            <ul className="navbarLinks">
                
                
                <li className="navbarLink">
                    <a href="#productsContainer"><CiSearch/></a>
                    <div className="cart-container">
                    <i className="cart-icon" onClick={mostrarCarrito}><CiShoppingCart/></i>
                    <span className="cart-count">{agregarProducto}</span>
                    </div>
                    <a href="#" className="menu"><CiMenuBurger/></a>
                </li>
                
            </ul>
        </header>
    )

}