import './App.css'
import { Categories } from './components/Categories/Categories'
import {Navbar} from './components/Navbar/Navbar'
import { ProductsContainer } from './components/Products/ProductsContainer'
import { Container } from './components/SectionContainer/Container'
import { useState, useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { ReasonsContainer } from './components/Reasons/ReasonsContainer'
import { Hero } from './components/Hero/Hero'
import { LinkContainer } from './components/LinkContainer/LinkContainer'
import { Cart } from './components/Cart/Cart'


function App() {
  
  const [productos, setProductos] = useState([]);

  const [productosCarrito, setProductoCarrito] = useState(() => {
    const guardado = localStorage.getItem('misProductos')
    return guardado ? JSON.parse(guardado) : []
  })

  const [agregarProducto, setAgregarProducto] = useState(() => {
    
    const cantidad = localStorage.getItem('misProductos')
    return cantidad ? JSON.parse(cantidad).length : 0
  })

  const fecthProductosInicio = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProductos(data);
}

useEffect(() => {
  fecthProductosInicio()
},[])

  useEffect(() => {
    localStorage.setItem('misProductos', JSON.stringify(productosCarrito))
  }, [productosCarrito]);

  return (
    <>
    <Cart productosCarrito={productosCarrito} setProductoCarrito={setProductoCarrito} setAgregarProducto={setAgregarProducto}></Cart>
    <Navbar setProductos={setProductos} agregarProducto={agregarProducto} productos={productos}></Navbar>
    
    <Hero></Hero>
    <LinkContainer></LinkContainer>
    <Categories setProductos={setProductos} productos={productos}></Categories>
    <Container>

      <ProductsContainer 
       productos={productos}
       setAgregarProducto={setAgregarProducto}
       setProductoCarrito={setProductoCarrito}
      >
      </ProductsContainer>
    </Container>
    <ReasonsContainer/>
    <Footer/>
    </>
  )
}

export default App
