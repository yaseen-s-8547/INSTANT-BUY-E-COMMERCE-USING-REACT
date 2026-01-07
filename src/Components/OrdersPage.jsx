import Header from "./Header";
import { formatmoney } from "../utils/money";
import axios from "axios";
import dayjs from "dayjs";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function OrdersPage() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getOrder = async () => {
      const response = await axios.get('/api/orders?expand=products')
      setOrder(response.data)
    }
    getOrder();

  }, [])
  return (

    <div className="bg-light min-vh-100">
      {/* Header with search */}
      <Header variant="checkout" />

      <div className="container my-4">
        <h2 className="fw-bold mb-4">Your Orders</h2>

        {/* ORDER CARD */}
        <div className="card shadow-sm mb-4">

          {/* ORDER HEADER */}

          {order && order.map((orders) => {
            return (
              <Fragment key={orders.id}>
                <div className="card-body border-bottom">
                  <div className="row text-muted small">
                    <div className="col-md-3">
                      <div className="fw-semibold text-dark">Order Placed</div>
                      {dayjs(orders.orderTimeMs).format('MMMM,D')}
                    </div>

                    <div className="col-md-3">
                      <div className="fw-semibold text-dark">Total</div>
                      {formatmoney(orders.totalCostCents)}
                    </div>

                    <div className="col-md-6 text-md-end">
                      <div className="fw-semibold text-dark">Order ID</div>
                      {orders.id}
                    </div>
                  </div>
                </div>

                <div className="card-body border-bottom">
                  {orders.products.map((products) => {
                    return (
                      <div key={products.productId} className="row align-items-center">
                        <div className="col-md-2">
                          <img
                            src={products.product.image}
                            className="img-fluid rounded"
                          />
                        </div>

                        <div className="col-md-6">
                          <h6 className="fw-bold">
                            {products.name}
                          </h6>
                          <p className="mb-1"> Estimates Delivery: {dayjs(products.estimatedDeliveryTimeMs).format('MMMM,D')}</p>
                          <p className="mb-2">{products.quantity}</p>

                          <button className="btn btn-success btn-sm">
                            Add to Cart
                          </button>
                        </div>

                        <div className="col-md-4 text-md-end mt-3">
                          <Link to={`/trackpack/${orders.id}/${products.productId}`} className="btn btn-outline-secondary">
                            Track package
                          </Link>
                        </div>
                      </div>
                    )
                  })}

                </div>
              </Fragment>
            )
          })}



        </div>
      </div>
    </div>
  );
}

export default OrdersPage;



