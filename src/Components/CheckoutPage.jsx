import Header from "./Header";


function CheckoutPage() {
  return (
    <div className="bg-light min-vh-100">
      <Header varient="checkout" />

      <div className="container my-5">
        <div className="row">

          {/* LEFT SIDE — REVIEW ORDER */}
          <div className="col-lg-8 mb-4">
            <h4 className="fw-bold mb-3">Review your order</h4>
            <p className="text-muted">Your cart is empty.</p>

            <button className="btn btn-success px-4">
              View products
            </button>
          </div>

          {/* RIGHT SIDE — PAYMENT SUMMARY */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">

                <h5 className="fw-bold mb-3">Payment Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Items (0):</span>
                  <span>$0.00</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping & handling:</span>
                  <span>$0.00</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Total before tax:</span>
                  <span>$0.00</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Estimated tax (10%):</span>
                  <span>$0.00</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold fs-5 text-success mb-3">
                  <span>Order total:</span>
                  <span>$0.00</span>
                </div>

                <button className="btn btn-success w-100 py-2" disabled>
                  Place your order
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
