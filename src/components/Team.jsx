import React from 'react'
import williams from '../assets/williams.png'
import alfa from '../assets/alfa.png'
import aston from '../assets/aston.png'
import { motion } from 'framer-motion'


const Card = ({ backgroundImage }) => {
    return (
      <div class="flex justify-center w-1/3 mt-[80px] gap-3 ">
        <div className=''>
          <img className='w-[400px] bg-sky-600 hover:bg-sky-400 duration-700 rounded-2xl' src={backgroundImage} alt="" />
        </div>
      </div>
    )
  }


const Teams = () => {
  return (
    <div>   
        
        <div>
            <h1 className='font-formula text-center text-5xl font-bold mt-8'>TEAMS</h1>
            <h2 className='font-formula text-center text-3xl font-bold mt-8'>F1 Teams 2023</h2>
            <p className='font-formula text-center text-xl font-bold mt-8'>Discover everything you need to know about this year's Formula 1 teams - drivers, podium finishes, points earned and championship titles.</p>
        </div>

        
        <div className="flex flex-wrap ">
            <Card backgroundImage={alfa} />
            <Card backgroundImage={aston} />
            <Card backgroundImage={williams} />
        </div>

        <div>
          <motion.button
            whileHover={{
                x: 5
            }}
            whileTap={{
                x: -5
            }}
            className="mt-8 bg-indigo-500 hover:bg-indigo-600 text-white mx-auto flex font-medium text-center py-3 px-4 rounded-lg"
            >
            View All Teams
          </motion.button>
        </div>
        
    </div>    
  )
}

export default Teams