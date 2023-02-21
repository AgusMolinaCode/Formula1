import React, {useState,useEffect} from 'react'
import Equipos from '../components/Equipos'
import teamfondo from '../assets/teamfondo.jpeg'
import {getFirestore, collection, getDocs} from 'firebase/firestore'


const Teams = () => {

  const [equipos, setEquipos] = useState( [] )
  
    useEffect(() => {
      const querydb = getFirestore()
      const queryCollection = collection(querydb, 'Equipos')
      getDocs(queryCollection)
          .then( (res) => setEquipos(res.docs.map((product) => ({ id: product.id, ...product.data() }))));
    }, [])

  return (
    <div>
        <div className='hidden md:flex'>
          <img className='h-[610px] w-full' src={teamfondo} alt="Imagen de Formula 1" />
        </div>  

        <div className='flex md:hidden'>
          <img className='h-[570px] w-full' src='https://firebasestorage.googleapis.com/v0/b/formula1-10797.appspot.com/o/santander.jpeg?alt=media&token=a9664281-53de-4bc0-839e-f7bb10418681' alt="Imagen de Formula 1" />
        </div>
      
      
      <div>
        <Equipos equipos={equipos} />
      </div>
    </div>
  )
}

export default Teams