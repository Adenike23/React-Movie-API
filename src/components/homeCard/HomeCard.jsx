import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomeCard = ({movie}) => {
  const base_url = "https://image.tmdb.org/t/p/w500/"
  const navigate = useNavigate()
  // https://api.themoviedb.org/3/movie/575264
  return (
    <div>
       
       <div onClick={()=> navigate(`/moviedetails/${movie.id}`)} className='relative cursor-pointer'>
            <img src={`${base_url}${movie.backdrop_path}`} alt="" className='rounded-xl opacity-75 h-[60vh] object-cover'/>
            <div className="absolute bottom-5 left-10">
                <div className="flex gap-3">
                    <h1>{movie.release_date.split('').splice(0, 4).join('')}</h1>
                    <div className='flex gap-1'>
                        <i class="ri-film-fill"></i>
                        <h2>Movie</h2>
                    </div>
                    <h3>{movie.vote_average}</h3>
                </div>
                <h4 className='font-bold text-lg'>{movie.title}</h4>
            </div>
        </div> 

    </div>
  )
}

export default HomeCard