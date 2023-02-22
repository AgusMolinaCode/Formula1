import React, {useState,useEffect} from 'react'
import Equipos from '../components/Equipos'
import teamfondo from '../assets/teamfondo.jpeg'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import ClipLoader from "react-spinners/ClipLoader";


const Teams = () => {

  const [equipos, setEquipos] = useState( [] )
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'Equipos')
        getDocs(queryCollection)
          .then( (res) => setEquipos(res.docs.map((product) => ({ id: product.id, ...product.data() }))));
          setLoading(false)
      }, 2500);    
    }, [])

    const spinner = <ClipLoader color={"#c15129"} loading={loading} size={100} dis />;


  return (
    <div>
        <div className='hidden md:flex'>
          <img className='h-[610px] w-full' src={teamfondo} alt="Imagen de Formula 1" />
        </div>  

        <div className='flex md:hidden'>
          <img className='h-[570px] w-full' src='https://firebasestorage.googleapis.com/v0/b/formula1-10797.appspot.com/o/santander.jpeg?alt=media&token=a9664281-53de-4bc0-839e-f7bb10418681' alt="Imagen de Formula 1" />
        </div>
      
      
      <div>
      {loading ? <div className='flex justify-center mx-auto mt-10'>{spinner}</div> : <Equipos equipos={equipos} />}
      </div>
    </div>
  )
}

export default Teams