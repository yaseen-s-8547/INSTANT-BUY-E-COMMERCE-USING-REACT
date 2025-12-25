
import HomePages from "./Components/HomePages"
import {Route, Routes} from 'react-router-dom'
import CheckoutPage from "./Components/checkOutPage"
import OrdersPage from "./Components/OrdersPage"
import Header from "./Components/Header"
import { useState,useEffect } from "react"
import axios from 'axios'
function App() {
  const [cart,setCart]=useState([])
   useEffect(()=>{
     axios.get('/api/cart-items')
  .then((response)=>{
   setCart(response.data);
    })
  },[])

  return (
    <>
    
    
    <Routes>
      <Route path='/' element={<HomePages  cart={cart}/>} />
      <Route path='/checkout' element={<CheckoutPage/>} /> 
      <Route path='/orders' element={<OrdersPage cart={cart} />} />
    </Routes>
  </>
  )
}

export default App
