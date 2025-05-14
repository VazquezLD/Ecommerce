import React, { useEffect, useState } from "react";
import './Cart.css'
import { FaMinus,FaPlus } from "react-icons/fa";

export const ProductCart = ({productosCarrito, setProductoCarrito, setAgregarProducto}) => {

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

    const sumarElemento = (prod, productosCarrito) => {
      setCantidades(prev => ({
        ...prev, [prod.id]: prev[prod.id] + 1}))
        productosCarrito = (productosCarrito => [...productosCarrito, prod])
        
        setAgregarProducto(prevCount => prevCount + 1)
        setProductoCarrito(productosCarrito)
        
    }

    const restarElemento = (prod, productosCarrito) => {
        setCantidades(prev => ({
        ...prev, [prod.id]: Math.max(prev[prod.id] - 1, 0)}))
        
          const indice = productosCarrito.findIndex(p => p.id == prod.id)
          if (indice !== -1) {
            productosCarrito.splice(indice, 1);
          }
        
        setAgregarProducto(prevCount => prevCount - 1)
        setProductoCarrito([...productosCarrito])
        
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
                    <FaMinus className="buttonAction" id="minus" onClick={() => restarElemento(prod, productosCarrito)}></FaMinus>
                    <span className="cantProd">{cantidades[prod.id] || 0}</span>
                    <FaPlus className="buttonAction" id="plus" onClick={() => sumarElemento(prod, productosCarrito)}></FaPlus>
                </div>
                </div>
              </div>
            ))}
          </>
        )
}