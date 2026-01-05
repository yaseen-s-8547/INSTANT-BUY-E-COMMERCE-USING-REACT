
import HomePages from "./Components/HomePages"
import {Route, Routes} from 'react-router-dom'
import CheckoutPage from "./Components/checkOutPage"
import OrdersPage from "./Components/OrdersPage"
import Header from "./Components/Header"
import { useState,useEffect } from "react"
import axios from 'axios'
import PackageTracking from "./Components/PackageTracking"
function App() {
  const [cart,setCart]=useState([])
   const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
    };
   useEffect(()=>{
   loadCart();
  },[])

  return (
    <>
    
    
    <Routes>
      <Route path='/' element={<HomePages  cart={cart} loadCart={loadCart}/>} />
      <Route path='/checkout' element={<CheckoutPage cart={cart}/>} /> 
      <Route path='/orders' element={<OrdersPage  cart={cart} />} />
      <Route path='/trackpack/:orderId/:productId' element={<PackageTracking />}/>
    </Routes>
  </>
  )
}

export default App
