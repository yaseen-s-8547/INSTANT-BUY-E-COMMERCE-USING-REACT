import Header from "./Header";


function PackageTracking(){


    return(
          <div className="bg-white min-vh-100">
      <Header variant="home" />

      <div className="container mt-4">

        {/* VIEW ALL ORDERS */}
        <a href="#" className="text-success text-decoration-underline">
          View all orders
        </a>

        {/* ORDER INFO */}
        <div className="mt-3">
          <h4 className="fw-bold">
            Arriving on Monday, January 5
          </h4>

          <p className="mb-1">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </p>
          <p className="text-muted">
            Quantity: 1
          </p>
        </div>

        {/* PRODUCT IMAGE */}
        <div className="my-4">
          <img
            src="/images/socks.png"   // replace with your real path
            alt="product"
            style={{ width: "120px" }}
          />
        </div>

        {/* ORDER STATUS */}
        <div className="mt-5">

          {/* STATUS LABELS */}
          <div className="d-flex justify-content-between fw-semibold mb-2">
            <span className="text-success">Preparing</span>
            <span className="text-muted">Shipped</span>
            <span className="text-muted">Delivered</span>
          </div>

          {/* PROGRESS BAR */}
          <div className="progress" style={{ height: "14px", borderRadius: "20px" }}>
            <div
              className="progress-bar bg-success"
              style={{ width: "20%", borderRadius: "20px" }}
            ></div>
          </div>

        </div>
      </div>
    </div>

    )
}
export default PackageTracking