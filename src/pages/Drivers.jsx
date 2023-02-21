import React, {useState,useEffect} from 'react'
import Pilotos from '../components/Pilotos'
import driver from '../assets/driver.jpg'
import {getFirestore, collection, getDocs} from 'firebase/firestore'


const Drivers = () => {

  const [pilotos, setPilotos] = useState( [] )
  
    useEffect(() => {
      const querydb = getFirestore()
      const queryCollection = collection(querydb, 'Pilotos')
      getDocs(queryCollection)
          .then( (res) => setPilotos(res.docs.map((product) => ({ id: product.id, ...product.data() }))));
    }, [])

  return (
    <div>
      
      <div className='hidden md:flex'>
        <img className='h-[510px] w-full' src={driver} alt="Imagen de Formula 1" />
      </div>

      <div className='flex md:hidden'>
        <img className='h-[450px] w-full' src='https://firebasestorage.googleapis.com/v0/b/formula1-10797.appspot.com/o/honda2.jpg?alt=media&token=77da4bde-c27d-4f42-a769-d5bc23e66d82' alt="Imagen de Formula 1" />
      </div>


      <h1 className='text-center flex justify-center text-5xl mt-5  text-black font-formula'>DRIVERS</h1>
      
      <div>
        <Pilotos pilotos={pilotos} />
      </div>
    </div>
  )
}

export default Drivers