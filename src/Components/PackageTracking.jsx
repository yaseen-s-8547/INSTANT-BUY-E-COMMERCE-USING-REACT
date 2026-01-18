import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
import dayjs from "dayjs";
import { AnimatedTrackingProgress } from "./AnimatedTrackingProgress";


function PackageTracking(){
   const {orderId,productId}=useParams();
   const [order,setOrder]=useState((null));
   
  useEffect(()=>{
    if(!orderId)return;
    console.log("api call started")
    const getPackage =  async()=>{
    const response = await axios.get(`https://instant-buy-backend.onrender.com/api/orders/${orderId}?expand=products`)
    console.log(response.data,"api complete")
    setOrder(response.data)
    }
    getPackage();
  },[orderId])
  if(!order){
    return null
  }
  const orderProduct=order.products.find((proid)=>{
   return proid.productId===productId
  });
  

    return(
          <div className="bg-white min-vh-100">
      <Header variant="home" />

      <div className="container mt-4">

        {/* VIEW ALL ORDERS */}
        <a href="#" className="text-success text-decoration-underline">
          View all orders
        </a>
        {}
        {/* ORDER INFO */}
        <div className="mt-3">
          <h4 className="fw-bold">
          Arriving {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM,D')}
          </h4>

          <p className="mb-1 fw-bold">
            {orderProduct.product.name}
          </p>
          <p className="text-muted">
            Quantity: {orderProduct.quantity}
          </p>
        </div>

        {/* PRODUCT IMAGE */}
        <div className="my-4">
          <img
            src={`/${orderProduct.product.image}`}   // replace with your real path
           
            style={{ width: "120px" }}
          />
        </div>

        {/* ORDER STATUS */}
        <div className="mt-5">

          <AnimatedTrackingProgress 
          startTime={order.orderTimeMs}
          endTime={orderProduct.estimateDeliveryTimeMs}
          />

        </div>
      </div>
    </div>

    )
}
export default PackageTracking