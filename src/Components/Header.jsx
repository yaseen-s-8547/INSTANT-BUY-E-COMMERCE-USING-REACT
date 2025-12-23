import { Link } from "react-router-dom";
function Header() {
  return (
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

        {/* Search Box */}
        <form className="d-flex mx-auto w-50">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products"
          />
        </form>
         <Link to="OrderPage" className="btn btn-warning fw-semibold me-2">
         order
         </Link>
        {/* Cart Button */}
        <button className="btn btn-warning fw-semibold">
          Cart 🛒
        </button>

      </div>
    </nav>
  )
}

export default Header
