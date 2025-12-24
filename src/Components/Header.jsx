import { Link } from "react-router-dom";
function Header({ varient }) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#1e293b" }}  // dark blue-gray
      >
        <div className="container-fluid">

          {/* Store Name */}
          <Link
            to="/"
            className="navbar-brand fw-bold text-warning text-decoration-none"
          >
            Instant Buy
          </Link>
          {varient === "checkout" && (
            <div className="d-flex mx-auto">
              <span className="navbar-brand fw-bold text-warning">
                Checkout (0 items)
              </span>
            </div>



          )}
          {/* Search Box */}
          {varient === "home" && (
            <form className="d-flex mx-auto w-50">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products"

              />


            </form>
          )}
          <div className="d-flex justify-content-end">
            <Link to="OrderPage" className="btn btn-warning fw-semibold me-2">
              order
            </Link>
            {/* Cart Button */}
            <Link to="OrderPage" className="btn btn-warning fw-semibold me-0">
              Cart 🛒
            </Link>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header
