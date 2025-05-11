import React from "react";
import './Cart.css'
import { CartProducts } from "./CartProducts";
import { ProductContainer } from "./ProductContainer";
import { Totals } from "./Totals";

export const Cart = ({total}) => {
    return (
        <div className="cartContainer">
            <CartProducts>
                <ProductContainer>
                    
                </ProductContainer>
                <Totals total={total}></Totals>
            </CartProducts>
        </div>
    )
}