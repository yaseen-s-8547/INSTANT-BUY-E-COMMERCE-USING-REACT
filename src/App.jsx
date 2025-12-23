
import HomePages from "./Components/HomePages"
import {Route, Routes} from 'react-router'
import CheckoutPage from "./Components/checkOutPage"
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePages />} />
      <Route path='checkout' element={<CheckoutPage/>} /> 
    </Routes>
  
  )
}

export default App
