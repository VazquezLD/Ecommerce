import './App.css'
import { Categories } from './components/Categories/Categories'
import {Navbar} from './components/Navbar/Navbar'
import { ProductsContainer } from './components/Products/ProductsContainer'
import { Container } from './components/SectionContainer/Container'
import { useState } from 'react'

function App() {

  const [productos, setProductos] = useState([]);
  
  return (
    <>
    <Navbar setProductos={setProductos}></Navbar>

    <Categories setProductos={setProductos}></Categories>

    <Container>
      <ProductsContainer productos={productos}></ProductsContainer>
    </Container>
    </>
  )
}

export default App
