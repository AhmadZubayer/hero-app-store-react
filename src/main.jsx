import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/root/Root.jsx'
import page1 from './components/tests/page1.jsx'
import page2 from './components/tests/page2.jsx'
import page3 from './components/tests/page3.jsx'
import Home from './components/pages/Home.jsx'

const router = createBrowserRouter([{
  path: '/',
  Component: App,
  children: [
    {index: true, Component: Home},
    {path: 'allApps', Component: page2},
    {path: 'installedApps', Component: page3}
  ]


}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
