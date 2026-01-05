function QuantitySelector({ quantity, onIncrease,onDecrease }) {
 

  

  return (
    <div className="d-flex align-items-center gap-2 mb-2">
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={onDecrease}
      >
        −
      </button>

      <span className="fw-bold">{quantity}</span>

      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
