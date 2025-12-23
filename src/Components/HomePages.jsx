import Header from "./Header"
import ProductGrid from "./productGrid"


function HomePage() {
  return (
    <div className="bg-light min-vh-100">
      <Header />
      <ProductGrid />
    </div>
  )
}

export default HomePage