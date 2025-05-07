import './App.css'
import { Categories } from './components/Categories/Categories'
import {Navbar} from './components/Navbar/Navbar'
import { ProductsContainer } from './components/Products/ProductsContainer'
import { Container } from './components/SectionContainer/Container'
import { useState, useEffect } from 'react'

function App() {
  
  const [productos, setProductos] = useState([]);
  const [productosCarrito, setProductoCarrito] = useState(() => {
    const guardado = localStorage.getItem('misProductos')
    return guardado ? JSON.parse(guardado) : []
  })
  const [agregarProducto, setAgregarProducto] = useState(() => {
    const cantidad = localStorage.getItem('misProductos')
    return cantidad ? JSON.parse(cantidad).length : []
  })

  useEffect(() => {
    localStorage.setItem('misProductos', JSON.stringify(productosCarrito))
  }, [productosCarrito]);

  return (
    <>
    <Navbar setProductos={setProductos} agregarProducto={agregarProducto}></Navbar>

    <Categories setProductos={setProductos}></Categories>

    <Container>

      <ProductsContainer 
       productos={productos}
       setAgregarProducto={setAgregarProducto}
       setProductoCarrito={setProductoCarrito}
      ></ProductsContainer>

    </Container>
    </>
  )
}

export default App
