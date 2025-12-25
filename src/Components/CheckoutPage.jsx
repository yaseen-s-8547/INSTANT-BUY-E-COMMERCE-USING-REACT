import Header from "./Header";


function CheckoutPage() {
  return (
     <div className="bg-light min-vh-100">
<Header varient="checkout" />
      <div className="container my-5">
        <h4 className="fw-bold mb-4">Review your order</h4>

        <div className="row">

          {/* LEFT SIDE — ORDER DETAILS */}
          <div className="col-lg-8">

            <div className="card mb-4">
              <div className="card-body">

                <h6 className="text-success fw-bold mb-3">
                  Delivery date: Friday, December 26
                </h6>

                <div className="row">

                  {/* PRODUCT IMAGE */}
                  <div className="col-md-3">
                    <img
                      src="https://picsum.photos/120"
                      className="img-fluid w-100"
                      alt="product"
                    />
                  </div>

                  {/* PRODUCT INFO */}
                  <div className="col-md-5">
                    <h6 className="fw-bold">
                      Black and Gray Athletic Cotton Socks - 6 Pairs
                    </h6>
                    <p className="mb-1 fw-bold">$10.90</p>

                    <p className="mb-1">
                      Quantity: 8{" "}
                      <span className="text-success ms-2">Update</span>{" "}
                      <span className="text-success ms-2">Delete</span>
                    </p>
                  </div>

                  {/* DELIVERY OPTIONS */}
                  <div className="col-md-4">
                    <h6 className="fw-bold mb-2">
                      Choose a delivery option:
                    </h6>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="delivery"
                      />
                      <label className="form-check-label">
                        Monday, January 5 <br />
                        <span className="text-success">FREE Shipping</span>
                      </label>
                    </div>

                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="delivery"
                      />
                      <label className="form-check-label">
                        Tuesday, December 30 <br />
                        $4.99 - Shipping
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="delivery"
                        defaultChecked
                      />
                      <label className="form-check-label">
                        Friday, December 26 <br />
                        $9.99 - Shipping
                      </label>
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE — PAYMENT SUMMARY */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">

                <h5 className="fw-bold mb-3">Payment Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Items (8):</span>
                  <span>$87.20</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping & handling:</span>
                  <span>$9.99</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Total before tax:</span>
                  <span>$97.19</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Estimated tax (10%):</span>
                  <span>$9.72</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold fs-5 text-success mb-3">
                  <span>Order total:</span>
                  <span>$106.91</span>
                </div>

                <button className="btn btn-success w-100 py-2">
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
