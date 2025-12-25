import Header from "./Header";

function OrdersPage() {
  return (
    <div className="bg-light min-vh-100">
      {/* Header with search */}
      <Header variant="checkout" />

      <div className="container my-4">
        <h2 className="fw-bold mb-4">Your Orders</h2>

        {/* ORDER CARD */}
        <div className="card shadow-sm mb-4">
          
          {/* ORDER HEADER */}
          <div className="card-body border-bottom">
            <div className="row text-muted small">
              <div className="col-md-3">
                <div className="fw-semibold text-dark">Order Placed</div>
                December 23
              </div>

              <div className="col-md-3">
                <div className="fw-semibold text-dark">Total</div>
                $181.21
              </div>

              <div className="col-md-6 text-md-end">
                <div className="fw-semibold text-dark">Order ID</div>
                cf45c640-fa15-7931-7b25-f03d45885809
              </div>
            </div>
          </div>

          {/* ORDER ITEM 1 */}
          <div className="card-body border-bottom">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img
                  src="https://via.placeholder.com/120"
                  className="img-fluid rounded"
                />
              </div>

              <div className="col-md-6">
                <h6 className="fw-bold">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </h6>
                <p className="mb-1">Arriving on: January 1</p>
                <p className="mb-2">Quantity: 2</p>

                <button className="btn btn-success btn-sm">
                  Add to Cart
                </button>
              </div>

              <div className="col-md-4 text-md-end">
                <button className="btn btn-outline-secondary">
                  Track package
                </button>
              </div>
            </div>
          </div>

          {/* ORDER ITEM 2 */}
          <div className="card-body border-bottom">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img
                  src="https://via.placeholder.com/120"
                  className="img-fluid rounded"
                />
              </div>

              <div className="col-md-6">
                <h6 className="fw-bold">Intermediate Size Basketball</h6>
                <p className="mb-1">Arriving on: December 26</p>
                <p className="mb-2">Quantity: 1</p>

                <button className="btn btn-success btn-sm">
                  Add to Cart
                </button>
              </div>

              <div className="col-md-4 text-md-end">
                <button className="btn btn-outline-secondary">
                  Track package
                </button>
              </div>
            </div>
          </div>

          {/* ORDER ITEM 3 */}
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img
                  src="https://via.placeholder.com/120"
                  className="img-fluid rounded"
                />
              </div>

              <div className="col-md-6">
                <h6 className="fw-bold">
                  Women's Knit Winter Beanie - Blue
                </h6>
                <p className="mb-1">Arriving on: January 1</p>
                <p className="mb-2">Quantity: 6</p>

                <button className="btn btn-success btn-sm">
                  Add to Cart
                </button>
              </div>

              <div className="col-md-4 text-md-end">
                <button className="btn btn-outline-secondary">
                  Track package
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
