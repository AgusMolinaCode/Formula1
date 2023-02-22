import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, getDoc, doc } from 'firebase/firestore'
import ClipLoader from "react-spinners/ClipLoader";

const TeamCards = () => {

  const {ID} = useParams();

  const [item,setItem] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, "Equipos", ID);
      getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
      setLoading(false)
    }, 2500);  
  }, [ID]);

  const spinner = <ClipLoader color={"#c15129"} loading={loading} size={100} dis />;

  return (
    <div className='pt-[100px] bg-white pb-[5rem]'>
       
      <div className='pt-14 lg:px-10'>
      
        <h1 className='text-6xl text-center md:text-start font-formula'>{item.nombre}</h1>

        <div className='mt-10 bg-white  rounded-3xl pb-1'>
        {loading ? <div className='flex justify-center mx-auto mt-10'>{spinner}</div> :
          <div>
            <div>
                  
                <div className='flex items-center justify-center  lg:justify-start lg:px-10'>  
                  <img className='w-[250px] lg:w-[350px]' src={item.escudo} alt="" />
                </div>  

              <div className='grid items-center w-full p-2 mt-5 justify-center'>
                <table className='p-1 mx-auto'>
                        <tr>
                            <td><h1 className='text-xl  lg:text-3xl font-formula'>Full Team Name:</h1></td>
                            <td><h1 className='text-xl w-full font-bold ml-8'>{item.nombre}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-xl lg:text-3xl font-formula'>Base:</h1></td>
                            <td><h1 className='text-xl font-bold ml-8'>{item.base}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-xl lg:text-3xl font-formula'>Team Chief:</h1></td>
                            <td><h1 className='text-xl font-bold ml-8'>{item.jefe}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-xl lg:text-3xl font-formula'>Technical Chief:</h1></td>
                            <td><h1 className='text-xl font-bold ml-8'>{item.tecnico}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-xl lg:text-3xl font-formula'>Chassis:</h1></td>
                            <td><h1 className='text-xl font-bold ml-8'>{item.chasis}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-xl lg:text-3xl font-formula'>Power Unit:</h1></td>
                            <td><h1 className='text-xl font-bold ml-8'>{item.motor}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-xl lg:text-3xl font-formula'>First Team:</h1></td>
                            <td><h1 className='text-xl font-bold ml-8'>{item.entrada}</h1></td>
                        </tr>
                        <tr>
                            <td><h1 className='text-xl lg:text-3xl font-formula'>World Champs:</h1></td>
                            <td><h1 className='text-xl font-bold ml-8'>{item.champs}</h1></td>
                        </tr>
                      
                        <tr>
                            <td><h1 className='text-xl lg:text-3xl font-formula'>Pole Positions:</h1></td>
                            <td><h1 className='text-xl font-bold ml-8'>{item.pole}</h1></td>
                        </tr>
                       
                    </table>


                    
                      <div className='grid grid-cols-1  md:flex gap-2'>
                        <div className='grid h-full'>
                          <img className=' w-[250px] lg:w-[350px] mx-auto h-full rounded-3xl' src={item.piloto1foto} alt="" />
                          <div className='rounded-3xl border-2 hover:bg-black hover:text-white duration-500 border-black mt-2  flex justify-center items-center'>
                              <h1 className='text-3xl  font-formula'>{item.piloto1nombre} {item.piloto1apellido}</h1>
                          </div>
                        </div>  
                        <div className='grid h-full'>
                          <img className='w-[250px] lg:w-[350px] h-full mx-auto rounded-3xl' src={item.piloto2foto} alt="" />
                          <div className='rounded-3xl border-2 hover:bg-black  hover:text-white duration-500 border-black mt-2 flex justify-center items-center'>
                              <h1 className='text-3xl font-formula'>{item.piloto2nombre} {item.piloto2apellido}</h1>
                          </div>
                        </div>  
                      </div>
                    </div>


                <div className='mt-[5rem]  px-5 lg:px-12 mx-auto lg:max-w-[1300px]'>
                    <div className='flex justify-center items-center mx-auto mt-12 rounded-3xl  mb-10'>
                        <div className="carousel w-full  rounded-3xl">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src={item.foto1} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src={item.foto2} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src={item.foto3} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div> 
                    </div>
                </div>    

                
                
                <div>
                      <h1 className='text-center mt-14 font-formula text-3xl lg:text-5xl'>in profile</h1>
                      <p className='lg:px-20 lg:m-16 text-md mt-4 lg:text-lg'>{item.historia}</p>
                </div>

              </div>
            </div>
          </div>
          }
        </div>

      </div>

    </div>
  )
}

export default TeamCards