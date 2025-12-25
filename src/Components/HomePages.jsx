import Header from "./Header"
import ProductGrid from "./productGrid"
import { useState } from "react"
import axios from "axios"


function HomePage() {
   const [cart,setCart]=useState([])
   axios.get('http://localhost:3000/api/cart-items')
  .then((response)=>{
   setCart(response.data);
    })
  return (
    <div className="bg-light min-vh-100">
      <Header varient="home" cart={cart}/>
      <ProductGrid />
    </div>
  )
}

export default HomePage