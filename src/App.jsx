import './App.css'
import Footer from './components/ui/Footer'
import Nav from './components/ui/Nav'
import { Outlet, useNavigation } from 'react-router'
import Loading from './components/ui/Loading'
import { InstalledAppsProvider } from './contexts/InstalledAppsContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const navigation = useNavigation();

  return (
    <InstalledAppsProvider>
      <Nav></Nav>
      {navigation.state === 'loading' ? <Loading /> : <Outlet />}
      <Footer></Footer>
      <ToastContainer />
    </InstalledAppsProvider>
  )
}

export default App
