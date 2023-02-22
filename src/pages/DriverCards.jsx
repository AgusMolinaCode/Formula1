import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import circuit from '../assets/circuit.jpeg'
import ClipLoader from "react-spinners/ClipLoader";


const DriverCards = () => {

  const {ID} = useParams()

  const [item,setItem] = useState({})  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "Pilotos", ID);
        getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() })); 
        setLoading(false)
    }, 2000);
    
    
  }, [ID]);

  const spinner = <ClipLoader color={"#c15129"} loading={loading} size={100} dis />;
    
  return (
    <div>

            <div className='hidden md:flex'>
                <img src={circuit} alt="Imagen de Formula 1" />
            </div>
                
            <div className='flex md:hidden'>   
                <img className='h-[460px] w-full' src='https://firebasestorage.googleapis.com/v0/b/formula1-10797.appspot.com/o/1.jpg?alt=media&token=eba68689-6115-4018-bcde-a1df1f6b3aee' alt="Imagen de Formula 1" />
            </div>
            {loading ? <div className='flex justify-center mx-auto mt-10'>{spinner}</div> :
            <div>
                
                
                <h1 className='mt-10 text-center font-formula font-bold text-5xl lg:text-7xl'>{item.nombre}</h1>
                
                <div className='grid lg:flex w-full p-2 lg:p-12 justify-center mt-5'>
                    <img src={item.imagen}  alt={item.nombre} />
                    <table className='mt-5' >
                        <tr>
                            <td><h1 className='text-2xl lg:text-3xl font-formula'>Team:</h1></td>
                            <td><h1 className='text-xl lg:text-2xl font-medium'>{item.team}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-2xl lg:text-3xl font-formula'>Country:</h1></td>
                            <td><h1 className='text-xl lg:text-2xl font-medium'>{item.nacionalidad}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-2xl lg:text-3xl font-formula'>Podios:</h1></td>
                            <td><h1 className='text-xl lg:text-2xl font-medium'>{item.podios}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-2xl lg:text-3xl font-formula'>Puntos:</h1></td>
                            <td><h1 className='text-xl lg:text-2xl font-medium'>{item.puntos}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-2xl lg:text-3xl font-formula'>Grands Prix entered:</h1></td>
                            <td><h1 className='text-xl lg:text-2xl font-medium'>{item.grandprix}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-2xl lg:text-3xl font-formula mr-8'>World Championships:</h1></td>
                            <td><h1 className='text-xl lg:text-2xl font-medium'>{item.worldchampion}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-2xl lg:text-3xl font-formula'>Highest race finish:</h1></td>
                            <td><h1 className='text-xl lg:text-2xl font-medium'>{item.highestfinish}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-2xl lg:text-3xl font-formula'>Highest grid position:</h1></td>
                            <td><h1 className='text-xl lg:text-2xl font-medium'>{item.highestgrid}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-2xl lg:text-3xl font-formula'>Date of birth:</h1></td>
                            <td><h1 className='text-xl lg:text-2xl font-medium'>{item.cumple}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-2xl lg:text-3xl font-formula'>Place of birth:</h1></td>
                            <td><h1 className='text-xl lg:text-2xl font-medium'>{item.lugarcumple}</h1></td>
                        </tr>
                    </table>

                </div>

                <h1 className='font-formula text-center text-4xl lg:text-5xl mt-20 mb-5'>Biography</h1>

                <div className='flex mt-12 text-center items-center p-2 lg:pr-[7rem] lg:pl-[7rem]'>
                    <h1 className='font-semibold text-md lg:text-2xl'>{item.biografia}</h1>                   
                </div>

                <div className='flex justify-center items-center mx-auto mt-12 rounded-3xl lg:w-[1200px] lg:h-[800px] mb-10'>
                    <div className="carousel w-full rounded-3xl">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={item.slider1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={item.slider2} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={item.slider3} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div>
        }
    </div>
  )
}

export default DriverCards