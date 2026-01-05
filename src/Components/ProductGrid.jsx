import axios from 'axios'
import { formatmoney } from '../utils/money'
import { useEffect, useState } from 'react'
import QuantitySelector from './QuantitySelector'

function ProductGrid({loadCart}) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getHome = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    }

    getHome()
  }, [])

  return (
    <div className="container my-4">
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="fw-bold">{product.name}</h6>

                <p className="text-success">
                  {formatmoney(product.priceCents)}
                </p>

                {/* Quantity UI only */}
                <QuantitySelector />

                <button className="btn btn-success mt-auto" onClick={async()=>{
                 await axios.post('/api/cart-items',{
                    productId:product.id,
                    quantity:1
                  });
                  await loadCart();
                }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGrid
