import React from "react";
import { useState } from "react";


export const InputProduct = ( {setProductos} ) => {
    
    const [producto, setProducto] = useState("")

    const fecthProductos = async (e) => {
        e.preventDefault();
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();

        const filtradosNombre = data.filter((prod) =>
            prod.title.toLowerCase().includes(producto.toLowerCase())
          );
      
          setProductos(filtradosNombre);
    }
    
    return(
        <form onSubmit={fecthProductos}>
            <input type="text"
            placeholder="Buscar productos"
            className="inputProducts"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
        ></input>
        </form>
    )
}