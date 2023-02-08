import React from 'react'
import lewis from '../assets/lewis.png'
import sainz from '../assets/sainz.png'
import max from '../assets/max.png'
import { motion } from "framer-motion"
import Teams from '../components/Team'
import Circuit from '../components/Circuit'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

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
                    <div className='flex  justify-around'>
                        <img src={max} alt="" />
                        <img src={sainz} alt="" />
                        <img src={lewis} alt="" />
                    </div>
                    <div>
                        <h2 className='font-formula text-xl text-center m-8'>Take a look at this season's official F1 lineup. Get a detailed breakdown of drivers, their background and best positions. Stay updated on your favorite F1 drivers both on and off the track.</h2>
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