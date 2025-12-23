
import HomePages from "./Components/HomePages"
import {Route, Routes} from 'react-router'
import CheckoutPage from "./Components/checkOutPage"
import OrdersPage from "./Components/OrdersPage"
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePages />} />
      <Route path='checkout' element={<CheckoutPage/>} /> 
      <Route path='OrderPage' element={<OrdersPage />} />
    </Routes>
  
  )
}

export default App
