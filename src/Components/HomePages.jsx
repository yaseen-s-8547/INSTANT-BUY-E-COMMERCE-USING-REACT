
import React from "react"
import Header from "./Header"
import ProductGrid from "./ProductGrid"



function HomePage({cart,loadCart}) {
   
 
  return (
    <div className="bg-light min-vh-100">
    <Header variant="home" cart={cart}/>
      <ProductGrid loadCart={loadCart} />
    </div>
  )
}

export default HomePage