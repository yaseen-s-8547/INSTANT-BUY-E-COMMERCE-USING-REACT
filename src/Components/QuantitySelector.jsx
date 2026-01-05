function QuantitySelector({ quantity, onChange }) {
  function increase() {
    onChange(quantity + 1)
  }

  function decrease() {
    if (quantity > 1) {
      onChange(quantity - 1)
    }
  }

  return (
    <div className="d-flex align-items-center gap-2 mb-2">
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={decrease}
      >
        −
      </button>

      <span className="fw-bold">{quantity}</span>

      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={increase}
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
