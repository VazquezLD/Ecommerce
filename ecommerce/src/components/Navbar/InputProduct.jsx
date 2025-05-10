import React, { useEffect } from "react";
import { useState } from "react";

export const InputProduct = ( {setProductos, productos} ) => {
    
    const [producto, setProducto] = useState("")
    const [copia, setCopia] = useState([])

    useEffect(() => {
        if (productos.length && copia.length === 0) {
            setCopia(productos)};
    },[productos])

    
    const filtrarProductos = (e) => {
        e.preventDefault();
        const filtradosNombre = copia.filter((prod) =>
            prod.title.toLowerCase().includes(producto.toLowerCase())
        );
        setProductos(filtradosNombre)
    }
    
    return(
        <form onSubmit={filtrarProductos}>
            <input type="text"
            placeholder="Buscar productos"
            className="inputProducts"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
        ></input>
        </form>
    )
}