import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// 615656
const MovieDetails = () => {
  const base_url = "https://image.tmdb.org/t/p/w400/"
  const {movie_id} = useParams()
  const [movie, setMovie] = useState([])
  const navigate = useNavigate()
  const getMovieDetails = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IxMWYxZWExZWIzZTM4M2JhYzc5OTgzNTQxN2M3MyIsInN1YiI6IjY1MmFjZGNhMzU4ZGE3MDBhZDM0Y2Y4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2RM065u2w5bgyDaF_klJGbOCv4ZNjeFBEYxHqxkWLtE'
    }
  })
  const data = await response.json()
  setMovie(data)
  // console.log(data);
  }
  useEffect(()=>{
    getMovieDetails()
  }, [])

  return (
    <div className='bg-slate-900 py-10 background overflow-hidden' style={{background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${base_url}${movie.backdrop_path}`}}>
      <button onClick={()=>navigate('/')} className='relative -top-8 left-5 py-2 px-4 bg-indigo-950 text-white font-semibold rounded-lg shadow-md hover:scale-110 duration-700'><i class="ri-arrow-left-line"></i>Back</button>
        <div className='flex flex-col md:flex-row items-center p-10 gap-12 text-white md:px-[7rem] lg:gap-10 xl:px-[15rem] xl:gap-20'>
        <img className='rounded-lg ms-[1rem]' src={`${base_url}${movie.poster_path}`} alt="" />
        <div>
            <h1 className='text-blue-800 text-3xl font-bold'>{movie.title}</h1>
            <div className="flex space-x-5 mb-15">
                <h2>{movie.original_title}</h2>
                <h2>{movie.popularity}</h2>
                <h2><span className='language'>Language -</span>{movie.original_language}</h2>
            </div>
            <h3 className='my-6'><span className='rating'>Movie Rating</span>{movie.vote_average}</h3>
            <h4><span className='overview'>Overview</span>{movie.overview}</h4>
            <h5 className='mt-6'> <span className='released'>Released on</span>{movie.release_date}</h5>
        </div>
    </div>
    </div>
  )
}

export default MovieDetails