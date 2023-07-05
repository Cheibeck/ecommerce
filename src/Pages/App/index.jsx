import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/MyAccount', element: <MyAccount /> },
    { path: '/MyOrder', element: <MyOrder /> },
    { path: '/MyOrders', element: <MyOrders /> },
    { path: '/*', element: <NotFound /> },
    { path: '/Signin', element: <Signin /> },
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App
