import Main from './pages/Main'
import Navbar from './components/Navbar'
import Teams from './pages/Teams'
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import Drivers from './pages/Drivers'
import Circuits from './pages/Circuits'
import DriverCards from './pages/DriverCards'
import TeamCards from './pages/TeamCards'
import CircuitCard from './pages/CircuitCard'



function App() {
  
  return (
    <BrowserRouter>
      <Navbar /> 
        <Routes>  
          <Route path="/" element={<Main />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/driverCard/:ID" element={<DriverCards />} />
          <Route path='/teamCard/:ID' element={<TeamCards />} />
          <Route path='/circuitCard/:ID' element={<CircuitCard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/circuits" element={<Circuits />} />
        </Routes>     
    </BrowserRouter>
  )
}

export default App

