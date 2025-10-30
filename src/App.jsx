import './App.css'
import Footer from './components/ui/Footer'
import Nav from './components/ui/Nav'
import { Outlet, useNavigation } from 'react-router'
import Loading from './components/ui/Loading'

function App() {
  const navigation = useNavigation();

  return (
    <>
      <Nav></Nav>
      {navigation.state === 'loading' ? <Loading /> : <Outlet />}
      <Footer></Footer>
    </>
  )
}

export default App
