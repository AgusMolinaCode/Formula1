import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
  <div>
    <div class="w-full h-22 fixed  bg-slate-50 bg-opacity-30 backdrop-blur-lg rounded drop-shadow-lg z-30">
        <div className='ml-4 mr-4 flex p-4 items-center justify-around'> 
            <Link to='/'> 
              <img src={logo} alt="logo" className=' w-[150px]'/>
            </Link>

            <div className='hidden md:flex gap-4'>
                <Link to='/drivers'>
                  <h1 className='font-formula uppercase text-2xl text-slate-900'>Drivers</h1>
                </Link>
                <Link to='/teams'>
                  <h1 className='font-formula uppercase text-2xl text-slate-900'>Teams</h1>
                </Link>
                <Link to='/circuits'>
                  <h1 className='font-formula uppercase text-2xl text-slate-900'>Circuits</h1>
                </Link>
            </div>

            <div className="navbar-end flex justify-end mr-5 md:hidden">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-2 gap-6 flex items-center p-2 shadow bg-gray-200 rounded-box absolute right-3 w-52">
                <Link to='/drivers'>
                  <h1 className='font-formula uppercase text-xl text-slate-900'>Drivers</h1>
                </Link>
                <Link to='/teams'>
                  <h1 className='font-formula uppercase text-xl text-slate-900'>Teams</h1>
                </Link>
                <Link to='/circuits'>
                  <h1 className='font-formula uppercase text-xl text-slate-900'>Circuits</h1>
                </Link>
                </ul>
              </div>
            </div>

        </div>  
    </div>
    
  </div>     
  )
}

export default Navbar