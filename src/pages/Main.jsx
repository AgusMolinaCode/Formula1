import React from 'react'
import lewis from '../assets/lewis.png'
import sainz from '../assets/sainz.png'

import { motion } from "framer-motion"
import Teams from '../components/Team'
import Circuit from '../components/Circuit'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <div class='hero'></div>
        <div className="relative h-[720px]">
            <div className="absolute bg-black w-full h-[760px] top-[-48px] transform -skew-y-3">
                <div className="h-full w-auto clip-path-y-2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800">
                    <div>
                        <h1 className='font-formula text-5xl text-white text-center font-bold p-3'>DRIVERS</h1>
                    </div>
                    <div className='md:flex flex-row justify-center'>
                        <img className='hidden  lg:flex lg:w-[500px]' src={sainz} alt="" />
                        <img className='  lg:flex  w-[400px] lg:w-[500px] ' src={lewis} alt="" />
                    </div>
                    <div>
                        <h2 className='font-formula text-xl text-center m-8'>Take a look at this season's official F1 lineup. Get a detailed breakdown of drivers, their background and best positions. Stay updated on your favorite F1 drivers both on and off the track.</h2>
                        <Link to='/drivers'> 
                            <motion.button
                                whileHover={{
                                    x: 5
                                }}
                                whileTap={{
                                    x: -5
                                }}
                                className="bg-indigo-500 hover:bg-indigo-600 text-white mx-auto flex font-medium text-center py-3 px-4 rounded-lg"
                                >
                                View All Drivers
                            </motion.button>
                        </Link>    
                    </div>
                </div>  
            </div>
        </div>

        <div>
            <Teams />
            <Circuit />
            <Footer />
        </div>
    </div>

  )
}

export default Main