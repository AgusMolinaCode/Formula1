import Circuit from './components/Circuit'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Teams from './components/Teams'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <>
      <Navbar /> 
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/teams' element={<Teams />} />   
            
            
        </Routes>
      <Footer />   
    </>
  )
}

export default App

