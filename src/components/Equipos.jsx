import React from 'react'
import { Link } from 'react-router-dom'

const Equipos = ({equipos}) => {
  return (
    <>
        <div class='f1-border--top-right'>
            <h1 className='flex justify-start text-4xl lg:text-[4rem]  text-black font-formula'>F1 TEAMS 2023</h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:ml-12 ml-2  mr-2 lg:mr-12 gap-10'>
        {equipos.map(item => (  
                <div key={item.id} class='listing-item-wrapper'>
                    <div className='mt-2'>
                    <div className='border-b-2 border-gray-700 mb-2 pb-3'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <span className='inline-block w-1 h-7 bg-slate-500 mr-5'></span>                    
                                <Link to={`/teamCard/${item.id}`}>    
                                    <span className='font-formula text-3xl lg:text-4xl hover:ml-2 duration-300 cursor-pointer'>{item.nombre}</span>
                                </Link>    
                            </div>    
                            <div className='max-w-[50px]'>
                                <img src={item.escudo} alt={item.nombre} />
                            </div>
                        </div>
                    </div>

                    <div class='card'>

                            <div class='driver'>
                                <div className='flex justify-between w-full items-center'>
                                        
                                        <div className='flex gap-1'>
                                            <span className='font-semibold text-xl'>{item.piloto1nombre}</span>
                                            <span className='font-formula text-xl'>{item.piloto1apellido}</span>
                                        </div>
                                            
                                        <div className='w-[50px]'>
                                            <img src={item.piloto1foto} alt="Foto de Piloto F1" />
                                        </div>
                                </div>
                            </div>

                            <div class='driver'>
                                <div className='flex items-center justify-between w-full'>
                                    
                                    <div className='flex gap-1'>
                                        <span className='font-semibold text-xl'>{item.piloto2nombre}</span>
                                        <span className='font-formula text-xl'>{item.piloto2apellido}</span>
                                    </div>
                                        
                                    <div className='w-[50px]'>
                                        <img src={item.piloto2foto} alt="Foto de Piloto F1" />
                                    </div>

                                </div>
                            </div>

                    </div>

                    <div class='listing-image'>
                        <img className='w-[500px]  flex items-center mx-auto' src={item.auto} alt={item.nombre} />
                    </div>
                    </div>
                </div> 
            ))}
        </div>

        <div className='mt-10'></div>
    </>    
  )
}

export default Equipos