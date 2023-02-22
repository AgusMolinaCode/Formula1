import React, {useState,useEffect} from 'react'
import circuit from '../assets/circuit.jpeg'
import { Link } from 'react-router-dom';


const Circuits = () => {

  const [circuits,setCircuits] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPIDAPI_ID,
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
      }
    };
    
    fetch('https://api-formula-1.p.rapidapi.com/circuits', options)
      .then(response => response.json())
      .then(response => setCircuits(response.response))
      .catch(err => console.error(err));
  }, []);

  

  return (
    <div>
            <div className='hidden md:flex'>
                <img src={circuit} alt="Imagen de Formula 1" />
            </div>
                
            <div className='flex md:hidden'>   
                <img className='h-[460px] w-full' src='https://firebasestorage.googleapis.com/v0/b/formula1-10797.appspot.com/o/131.jpg?alt=media&token=9bdc49e7-7915-4ccf-bc43-f916da9c9668' alt="Imagen de Formula 1" />
            </div>

            <div>
              <h1 className='text-6xl text-center m-8 font-formula'>Circuits</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-2 '>
              {circuits.map((circuit, idx) => (
                  <div key={idx} className="card bg-base-100 w-[200px] h-[200px] image-full">
                    <figure><img src={circuit.image} alt={circuit.name} /></figure>
                  <div className="card-body">
                    <h2 className="card-title text-4xl font-formula text-red-200">{circuit.competition.location.country}</h2>
                    <h3 className="card-title text-md font-formula text-red-100">{circuit.name}</h3>
                    <div className="card-actions justify-start">
                      <Link to={`/circuitCard/${circuit.id}`}><button className="btn bg-red-700 border-none font-formula hover:bg-red-600 duration-300 btn-primary">Watch</button></Link>
                    </div>
                  </div>
                </div>  
             
              ))}
            </div>

            </div>
    </div>
  )
}

export default Circuits



{/* <Link to={`/circuitCard/${circuit.id}`}>  
                <div className='bg-gray-300 hover:bg-gray-200 duration-300 rounded-xl' key={idx}>
                    <h1 className='text-center font-formula text-3xl m-2 font-bold '>{circuit.competition.location.country}</h1>
                    <img className='w-[300px] h-[250px]' src={circuit.image} alt="" />
                    <h1>{circuit.id}</h1>
                </div>
              </Link>  */}