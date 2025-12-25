import  axios from 'axios'
import { products } from "../../data/product"

function ProductGrid() {
  axios.get('http://localhost:3000/api/products')
  .then((response)=>{
   console.log(response.data) 
    })
  
  return (
    <div className="container my-4">

      <div className="row g-4">

        {/* ROW 1 */}

      {products.map((products)=>{
        return(
            <div key={products.id}className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <img src={products.image} className="card-img-top" />
            <div className="card-body d-flex flex-column">
              <h6 className="fw-bold">{products.name}</h6>
              <p className="text-success">${products.priceCents/100}</p>
              <button className="btn btn-success mt-auto">Add to Cart</button>
            </div>
          </div>
        </div>
        )
      })}

       </div>
    </div>
  )
}

export default ProductGrid
