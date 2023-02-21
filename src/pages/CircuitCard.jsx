import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const CircuitCard = () => {

  const {ID} = useParams()

  const [card, setCard] = useState([])  

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPIDAPI_ID,
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
    };
    
    fetch(`https://api-formula-1.p.rapidapi.com/circuits?id=${ID}`, options)
        .then(response => response.json())
        .then(response => setCard(response.response))
        .catch(err => console.error(err));
  }, [])
  

  return (
    <div className='pt-[9rem] px-2 lg:px-[8rem] '>
        
        {card.map((item, idx) => (
            <div key={idx}>
                <div class='listing-image'>
                    <h1 className='text-5xl font-formula underline text-center'>{item.name}</h1>
                    <h2 className='text-3xl font-formula underline text-center'>{item.competition.location.country}</h2>
                </div>    
                <div class='f1-border--top-right'>
                <div className='flex mt-6 flex-wrap'>
                    <div className='flex mx-auto'>
                        <img className='w-[400px]' src={item.image} alt="Imagen del Circuito" />
                    </div>
                    <div className='flex justify-center flex-wrap items-center mx-auto mt-5 gap-4'>

                        <div className=''>
                            <div class='f1-stat'>
                                <p className='text-3xl'>First Grand Prix</p>
                                <p className='text-4xl font-formula'>{item.first_grand_prix}</p>
                            </div>
                            <div class='f1-stat'>
                                <p className='text-3xl'>Number of Laps</p>
                                <p className='text-4xl font-formula'>{item.laps}</p>
                            </div>
                        </div>

                        <div className=''>
                            <div class='f1-stat'>
                                <p className='text-3xl'>Race Distance</p>
                                <p className='text-4xl font-formula'>{item.race_distance}</p>
                            </div>
                            <div class='f1-stat'>
                                <p className='text-3xl'>Length</p>
                                <p className='text-4xl font-formula'>{item.length}</p>
                            </div>
                        </div>

                        <div className=''>
                            <div class='f1-stat'>
                                <p className='text-3xl'>Opened</p>
                                <p className='text-4xl font-formula'>{item.opened}</p>
                            </div>
                            <div class='f1-stat'>
                                <p className='text-3xl'>Capacity</p>
                                <p className='text-4xl font-formula'>{item.capacity}</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                  </div>
                  <div class='listing-image'> 
                        <h1 className='text-5xl  font-formula underline text-center'>Lap Record</h1>
                  </div>
                    <div className='flex justify-center mt-5 mx-auto'>
                    
                        <div class='f1-stat'>   
                            <div className='grid lg:flex justify-center items-center'> 
                                <h1 className='font-formula text-4xl pr-2'>{item.lap_record.driver}</h1>
                                <h2 className='pr-2 text-xl font-bold'>Year:</h2>
                                <h1 className='font-formula text-4xl pr-2'>{item.lap_record.year}</h1>
                                <h2 className='pr-2 text-xl font-bold'>Time:</h2>
                                <h1 className='font-formula text-4xl'>{item.lap_record.time}</h1>
                            </div>
                        </div>
                    </div>
                </div>  

                
            </div>
        ))}
        
    </div>
  )
}

export default CircuitCard