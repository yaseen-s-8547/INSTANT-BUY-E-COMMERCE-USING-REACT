import Header from "./Header"
import ProductGrid from "./productGrid"



function HomePage({cart}) {
   
 
  return (
    <div className="bg-light min-vh-100">
    <Header variant="home" cart={cart}/>
      <ProductGrid />
    </div>
  )
}

export default HomePage