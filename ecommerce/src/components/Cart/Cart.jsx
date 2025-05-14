import React, { useEffect, useState } from "react";
import './Cart.css'
import { CartProducts } from "./CartProducts";
import { ProductContainer } from "./ProductContainer";
import { Totals } from "./Totals";
import { ProductCart } from "./ProductCart";

export const Cart = ( {productosCarrito, setProductoCarrito, setAgregarProducto} ) => {
    
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const nuevoTotal = productosCarrito.reduce((acc, prod) => acc + prod.price, 0);
        setTotal(nuevoTotal);
    }, [productosCarrito])

    return (
        <div className="cartContainer oculto" id="carrito">
            <CartProducts>
                <ProductContainer>
                    <ProductCart productosCarrito={productosCarrito} setProductoCarrito={setProductoCarrito} setAgregarProducto={setAgregarProducto}></ProductCart>
                </ProductContainer>
                <Totals total={total}></Totals>
            </CartProducts>
        </div>
    )
}