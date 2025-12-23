
function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#1e293b" }}  // dark blue-gray
    >
      <div className="container-fluid">

        {/* Store Name */}
        <span className="navbar-brand fw-bold fs-4 text-warning">
          Instant Buy
        </span>

        {/* Search Box */}
        <form className="d-flex mx-auto w-50">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products"
          />
        </form>

        {/* Cart Button */}
        <button className="btn btn-warning fw-semibold">
          Cart 🛒
        </button>

      </div>
    </nav>
  )
}

export default Header
