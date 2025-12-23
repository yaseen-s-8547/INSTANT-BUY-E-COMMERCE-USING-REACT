
import HomePages from "./Components/HomePages"
import {Route, Routes} from 'react-router'


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePages />} />
      <Route path='checkout' element={<div>test just a test my boooy</div>} /> 
    </Routes>
  
  )
}

export default App
