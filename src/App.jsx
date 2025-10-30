import './App.css'
import Footer from './components/ui/Footer'
import Nav from './components/ui/Nav'
import { Outlet } from 'react-router'

function App() {


  return (
    <>
      <Nav></Nav>
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default App
