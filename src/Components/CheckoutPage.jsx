import Header from "./Header";
import { formatmoney } from "../utils/money";
import axios from "axios";
import { useState, useEffect } from "react";
import dayjs from 'dayjs';
import React from "react";


function CheckoutPage({ cart, loadCart }) {
  const [deliveryOption, setDeliveryOption] = useState([])
  const [PaymentSummary, setPaymentSummary] = useState([null])
  useEffect(() => {

    const getCheckoutpage = async () => {
      const response = await axios.get('https://instant-buy-backend.onrender.com/api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOption(response.data)


 const paymentresponse = await axios.get(
        "https://instant-buy-backend.onrender.com/api/payment-summary"
      );
      setPaymentSummary(paymentresponse.data)

    }


    getCheckoutpage();

  }, [cart])
  const updateDeliveryOption = async (cartItemId, deliveryOptionId) => {
    await axios.put(`https://instant-buy-backend.onrender.com/image/api/cart-items/${cartItemId}`, {
      deliveryOptionId
    });
    await loadCart();
  }
  const deleteFunction = async (cartItemId) => {
    await axios.delete(`https://instant-buy-backend.onrender.com/image/api/cart-items/${cartItemId}`)
    await loadCart();
  }
   const updateFunction = async (cartItemId, quantity) => {
    await axios.put(
      `https://instant-buy-backend.onrender.com/api/cart-items/${cartItemId}`,
      { quantity }
    );
    
    await loadCart();
    setEditingItemId(null)
  }
  const [editingItemId, setEditingItemId] = useState(null)
  const [tempQuantity, setTempQuantity] = useState(1)


  return (
    <div className="bg-light min-vh-100">
      <Header varient="checkout" />
      <div className="container my-5">
        <h4 className="fw-bold mb-4">Review your order</h4>

        <div className="row">

          <div className="col-lg-12">
            {/* LEFT SIDE — ORDER DETAILS */}
            {deliveryOption.length > 0 && cart.map((cartItem) => {
              const selectedDeliveryOption = deliveryOption
                .find((deliveryOption) => {
                  return deliveryOption.id === cartItem.deliveryOptionId
                })
              return (
                
                  <div key={cartItem.productId} className="col-lg-12">

                    <div className="card mb-4">
                      <div className="card-body">

                        <h6 className="text-success fw-bold mb-3">
                          Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd,MMMM,D')}
                        </h6>

                        <div className="row">

                          {/* PRODUCT IMAGE */}
                          <div className="col-md-3">
                            <img
                               src={`https://instant-buy-backend.onrender.com/${cartItem.product.image}`}
                              className="img-fluid w-75 h-75"
                              alt="product"
                            />
                          </div>

                          {/* PRODUCT INFO */}
                          <div className="col-md-5">
                            <h6 className="fw-bold">
                              {cartItem.product.name}
                            </h6>
                            <p className="mb-1 fw-bold">{formatmoney(cartItem.product.priceCents)}</p>
                            {editingItemId === cartItem.productId ? (
                              <>
                                <select
                                  className="form-select form-select-sm w-auto"
                                  value={tempQuantity}
                                  onChange={(e) => setTempQuantity(Number(e.target.value))}
                                >
                                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(qty => (
                                    <option key={qty} value={qty}>
                                      {qty}
                                    </option>
                                  ))}
                                </select>
                                <button
                                  className="btn btn-success btn-sm"
                                  onClick={() =>
                                    updateFunction(cartItem.productId, tempQuantity)
                                  }
                                >
                                  Save
                                </button>

                                <button
                                  className="btn btn-outline-secondary btn-sm"
                                  onClick={() => setEditingItemId(null)}
                                >
                                  Cancel
                                </button>
                                </>
    

                          ) :(<p className="mb-1">
                                  Quantity: {cartItem.quantity}
                                  <span className="text-success ms-2" role="button" onClick={() => {
                                    setEditingItemId(cartItem.productId)
                                    setTempQuantity(cartItem.quantity)
                                  }}>Update</span>{" "}
                                  <span className="text-success ms-2" type="button" onClick={() => deleteFunction(cartItem.productId)}>Delete</span>
                                </p>)}





                                
                              </div>
                            <div className="col-md-4">
                              <h6 className="fw-bold mb-2">
                                Choose Your Delivery
                              </h6>
                              {deliveryOption.map((delivery) => {
                                let priceString = 'Free Shipping'
                                if (delivery.priceCents > 0) {
                                  priceString = `${formatmoney(delivery.priceCents)} -Shipping`
                                }
                                return (
                                  <>

                                    <div className="form-check mb-2  " onChange={() => updateDeliveryOption(cartItem.productId, delivery.id)}>
                                      <input
                                        checked={delivery.id === cartItem.deliveryOptionId}
                                        className="form-check-input"
                                        type="radio"
                                        name={`delivery-option-${cartItem.productId}`}
                                        onChange={() => { }}
                                      />
                                      <label className="form-check-label">
                                        {dayjs(delivery.estimatedDeliveryTimeMs).format('dddd, MMMM D')} <br />
                                        <span className="text-success">{priceString}</span>
                                      </label>
                                    </div>




                                  </>
                                )
                              })}
                            </div>


                          </div>
                        </div>
                      </div>

                    </div>
                    )

            })}
                  </div>

                  {/* RIGHT SIDE — PAYMENT SUMMARY */}
                  <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                      <div className="col-lg-12">
                        <div className="card shadow-sm">
                          <div className="card-body">

                            <h5 className="fw-bold mb-3">Payment Summary</h5>

                            <div className="d-flex justify-content-between mb-2">
                              <span>Items ({PaymentSummary.totalItems}):</span>
                              <span>{formatmoney(PaymentSummary.productCostCents)}</span>
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                              <span>Shipping & handling:</span>
                              <span>${PaymentSummary.shippingCostCents}</span>
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                              <span>Total before tax:</span>
                              <span>{formatmoney(PaymentSummary.totalCostBeforeTaxCents)}</span>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                              <span>Estimated tax (10%):</span>
                              <span>{formatmoney(PaymentSummary.taxCents)}</span>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between fw-bold fs-5 text-success mb-3">
                              <span>Order total:</span>
                              <span>{PaymentSummary.totalCostCents}</span>
                            </div>

                            <button className="btn btn-success w-100 py-2">
                              Place your order
                            </button>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4"></div>
                  </div>

                </div >
      </div>
        </div>
        );
}


        export default CheckoutPage;
