import './App.css'
import { Categories } from './components/Categories/Categories'
import {Navbar} from './components/Navbar/Navbar'
import { ProductsContainer } from './components/Products/ProductsContainer'
import { Container } from './components/SectionContainer/Container'
import { useState } from 'react'

function App() {

  const [productos, setProductos] = useState([]);
  const [agregarProducto, setAgregarProducto] = useState(0)
  const [productosCarrito, setProductoCarrito] = useState([])

  console.log(productosCarrito)

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
