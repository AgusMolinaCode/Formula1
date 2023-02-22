import React, {useState} from 'react'
import { Link } from 'react-router-dom'


const Pilotos = ({pilotos}) => {

    return (
        
        <div className='flex  flex-wrap gap-2 justify-evenly mt-8 m-2 mb-8'>
        {pilotos.map(item => (
          <div key={item.id}>
    
            <div className='bg-gray-100 rounded-3xl cursor-pointer p-2 hover:bg-gray-300 duration-500'>
              <Link to={`/driverCard/${item.id}`}>  
                <img src={item.imagen} alt={item.nombre} />
                <h1 className='text-center font-formula text-4xl mt-3'>{item.nombre}</h1>
              </Link>  
            </div>
            
          </div>
        ))}
        </div> 
    )  
  }

export default Pilotos