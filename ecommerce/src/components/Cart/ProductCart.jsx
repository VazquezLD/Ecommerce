import React, { useEffect, useState } from "react";
import './Cart.css'
import { FaMinus,FaPlus } from "react-icons/fa";

export const ProductCart = ({productosCarrito}) => {

  const productosUnicos = productosCarrito.filter(
      (producto, index, self) => index === self.findIndex(p => p.id === producto.id)
    )
    
  const [cantidades, setCantidades] = useState({})

  useEffect(() => {
    const nuevasCantidades = {};
      productosCarrito.forEach(prod => {
      if (!nuevasCantidades[prod.id]) {
        nuevasCantidades[prod.id] = 1;
      } else {
        nuevasCantidades[prod.id]++;
        }
      });
      setCantidades(nuevasCantidades);
     }, [productosCarrito]);

    const sumarElemento = (id) => {
      setCantidades(prev => ({
        ...prev,
        [id]: prev[id] + 1
      })
    )
    }
    const restarElemento = (id) => {
  setCantidades(prev => ({
        ...prev,
        [id]: Math.max(prev[id] - 1, 0)
      })
    )
    }

    return (
          <>
            {productosUnicos.map(prod => (
              <div className="productCart" key={prod.id}>
                <img src={prod.image} alt="product" className='imagenProductoCart'/>
                <div className="descContainer">
                <span className='tituloProductoCart'>{prod.title}</span>
                <span className='precioProductoCart'>${prod.price}</span>
                <div className="buttonsContainer">
                    <FaMinus className="buttonAction" id="minus" onClick={() => restarElemento(prod.id)}></FaMinus>
                    <span className="cantProd">{cantidades[prod.id] || 0}</span>
                    <FaPlus className="buttonAction" id="plus" onClick={() => sumarElemento(prod.id)}></FaPlus>
                </div>
                </div>
              </div>
            ))}
          </>
        )
}