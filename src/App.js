import './App.css'
import Navigation from './customer/component/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/component/Footer/Footer'
import Product from './customer/component/Product/Product'
import ProductDetails from './customer/component/ProductDetails/ProductDetails'
import Cart from './customer/component/Cart/Cart'
import CheckOut from './customer/component/CheckOut/CheckOut'
import Order from './customer/component/Order/Order'
import OrderDetail from './customer/component/Order/OrderDetail'
import { Route, Routes } from 'react-router-dom'
import CustomerRouters from './Routers/CustomerRouters'
import AdminRouters from './Routers/AdminRouters'

function App () {
  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomerRouters/>}></Route>
        <Route path="/admin/*" element={<AdminRouters/>}></Route>
      </Routes>


    </div>
  )
}

export default App
