import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
  <div className='hero'>
    <div class="w-full h-22 fixed  bg-slate-50 bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg z-10">
        <div className='ml-4 mr-4 flex p-4 items-center justify-around'> 
            <img src={logo} alt="logo" className=' w-[150px] ' />
            <div className='flex gap-4'>
                <Link to='/'>
                  <h1 className='font-formula uppercase text-2xl text-slate-900'>Drivers</h1>
                </Link>  
                {/* <Link>
                  <h1 className='font-formula uppercase text-2xl text-slate-900'>Teams</h1>
                </Link>
                <Link>
                  <h1 className='font-formula uppercase text-2xl text-slate-900'>Circuits</h1>
                </Link> */}
            </div>
        </div>  
    </div>
    
  </div>     
  )
}

export default Navbar