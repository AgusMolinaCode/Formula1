import React from 'react'
import usa from '../assets/usa.png'
import saudi from '../assets/saudi.png'
import alemania from '../assets/alemania.png'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'


const Circuit = () => {

    const Card = ({ backgroundImage }) => {
        return (
          <div class="flex justify-center  mt-[80px] gap-3 ">
            <div className=''>
              <img className='w-[400px] bg-gray-300 hover:bg-gray-200 duration-700 rounded-2xl' src={backgroundImage} alt="" />
            </div>
          </div>
        )
      }

  return (
    <div className="relative h-[580px]">
            <div className="absolute bg-black w-full h-[580px] top-10 transform -skew-y-3">
                <div className="h-[580px] w-full bg-cover bg-[url('https://res.cloudinary.com/dkrxctgeq/image/upload/v1675467238/nur_bw2ij7.jpg')]">
                    <div>
                        <h1 className='font-formula text-[3rem] z-10 text-white text-center font-bold p-3'>CIRCUITS</h1>
                    </div>

                    <div className="flex flex-col justify-around items-center mx-auto lg:flex-row gap-2 p-2">
                      
                      <div className='hidden lg:flex'>  
                        <Card backgroundImage={usa} />
                      </div>

                      <div className='hidden lg:flex'>  
                        <Card backgroundImage={saudi} />
                      </div>

                        <Card backgroundImage={alemania} />
                    </div>

                      <Link to='/circuits'>
                          <motion.button
                              whileHover={{
                                  x: 5
                              }}
                              whileTap={{
                                  x: -5
                              }}
                              className="bg-indigo-500 hover:bg-indigo-600 text-white mx-auto mt-14 flex font-medium text-center py-3 px-4 rounded-lg"
                              >
                              View All Circuits
                          </motion.button>
                      </Link>   
                </div>
                
                
                

               

            </div>
            
    </div>       
  )
}

export default Circuit