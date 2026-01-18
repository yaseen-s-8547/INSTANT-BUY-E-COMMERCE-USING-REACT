import React from 'react'

import axios from 'axios'


import { formatmoney } from '../utils/money'
import { useEffect, useState } from 'react'
import QuantitySelector from './QuantitySelector'

function ProductGrid({ loadCart }) {
  const [products, setProducts] = useState([])
  const [quantities, setQuantities] = useState({})

  useEffect(() => {
    const getHome = async () => {
      const response = await axios.get('https://instant-buy-backend.onrender.com/api/products')
      setProducts(response.data)
      const initialQantities = {}
      response.data.forEach(product => {
        initialQantities[product.id] = 1
      })
      setQuantities(initialQantities)
    }
    getHome()

  }, [])
  function increaseQuantity(productId) {
    setQuantities(prev => ({
      ...prev,
      [productId]: (prev[productId]) + 1
    }))
  }
  function decreaseQuantity(productId) {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, prev[productId] ?? 1) - 1
    }))
  }


  return (
    <div className="container my-4">
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={`https://instant-buy-backend.onrender.com/images/${product.image}`}
                className="card-img-top"
                alt={product.name}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="fw-bold">{product.name}</h6>

                <p className="text-success">
                  {formatmoney(product.priceCents)}
                </p>

                {/* Quantity UI only */}
                <QuantitySelector
                  quantity={quantities[product.id]}
                  onIncrease={() => increaseQuantity(product.id)}
                  onDecrease={() => decreaseQuantity(product.id)}
                />

                <button className="btn btn-success mt-auto" onClick={async () => {
                  await axios.post('https://instant-buy-backend.onrender.com/api/cart-items', {
                    productId: product.id,
                    quantity: quantities[product.id]
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
