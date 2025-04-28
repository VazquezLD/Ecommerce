import './App.css'
import { Categories } from './components/Categories/Categories'
import {Navbar} from './components/Navbar/Navbar'
import { Container } from './components/SectionContainer/Container'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Categories></Categories>
    <Container></Container>
    </>
  )
}

export default App
