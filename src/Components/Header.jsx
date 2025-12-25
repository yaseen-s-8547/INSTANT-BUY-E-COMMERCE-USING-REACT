import { Link } from "react-router-dom";
function Header({ variant,cart=[] }) {
  let totalQuantity=0;
  cart.forEach((cartitem)=>{
    totalQuantity+=cartitem.quantity
  })
  
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
          {variant === "checkout" && (
            <div className="d-flex mx-auto">
              <span className="navbar-brand fw-bold text-warning">
                Checkout (0)
              </span>
            </div>
           
          

          )}
          {/* Search Box */}
          {variant === "home" && (
            <>
            <form className="d-flex mx-auto w-50">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search products"/>
             </form>
             <div className="d-flex justify-content-end">
            <Link to="orders" className="btn btn-warning fw-semibold me-2">
              order
            </Link>
            {/* Cart Button */}
            <Link to="checkout" className="btn btn-warning fw-semibold me-0">
              Cart 🛒({totalQuantity})
            </Link>
          </div>
            </>
          )}
          

        </div>
      </nav>
    </>
  )
}

export default Header
