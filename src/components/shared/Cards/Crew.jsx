import {useState, useEffect} from 'react'
import Loading from '../../LoadingState'
import { Link } from 'react-router-dom'

export default function Crew() {
    const [crew, setCrew] = useState([])
    
    useEffect(() => {
        const fetchCrew = async() => {
            const res = await fetch("https://api.spacexdata.com/v4/crew")
            const data = await res.json()
            setCrew(data)
        }
        
        fetchCrew()
    }) 
  return (
    <>
    {!crew ? <Loading /> :
     <section className='py-32'>
        <h1 className='mb-10 text-center heading'>Crew</h1>   
        <div className='grid grid-cols-1 gap-5 px-5 mb-1 max-width md:grid-cols-2 lg:grid-cols-3'>
            {crew.map(({ id, name, image}) => (
               <Link key={id} to={`/crew/${id}`}>
                 <article className='relative'>
                    <img src={image} alt={name} loading='lazy' className='object-cover w-full h-96' />
                    <h2 className='absolute text-lg font-bold tracking-wide text-white bottom-5 left-5'>{name}</h2>
                </article>
               </Link>
            ))}
        </div>
     </section>}
    </>
  )
}
