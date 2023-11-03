import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import loadingImage from '../../assets/images/loading-img.gif'


const TopRated = () => {
    const base_url = "https://image.tmdb.org/t/p/w300/"
    const navigate = useNavigate()
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [loading, setLoading] = useState(false)
    
    const getTopRated = async ()=>{
        setLoading(true)
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IxMWYxZWExZWIzZTM4M2JhYzc5OTgzNTQxN2M3MyIsInN1YiI6IjY1MmFjZGNhMzU4ZGE3MDBhZDM0Y2Y4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2RM065u2w5bgyDaF_klJGbOCv4ZNjeFBEYxHqxkWLtE'
            }
        })
        const data = await response.json();
        setTopRatedMovies(data.results)
        if(response) setLoading(false)
        // console.log(data.results);
    }
    useEffect(()=>{
        getTopRated()
    }, [])
  return (
        <div className='bg-slate-900 min-h-[100vh]'>
            <h1 className='text-white text-3xl flex items-center justify-center pt-7 animate-marquee'>Top Rated Movies...</h1>
            <div className='w-[20%] mx-auto'>{loading === true ? <img src={loadingImage}/> : ''}</div>
                <div className="grid grid-col-1 place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 sm:gap-5 ps-12 py-10 pt-[5rem] text-white bg-slate-900 sm:ps-[10rem] sm:pe-6">
                    {topRatedMovies.map(eachTopRatedMovie =>(
                        <div onClick={()=> navigate(`/moviedetails/${eachTopRatedMovie.id}`)} className='rounded-lg hover:scale-105 duration-1000 cursor-pointer'>
                        <img src={`${base_url}${eachTopRatedMovie.poster_path}`} alt="" className='rounded-lg'/>
                        <div className='p-2'>
                            <div className="flex gap-3">
                                <h1>{eachTopRatedMovie.release_date.split('').splice(0, 4).join('')}</h1>
                                <div className='flex gap-1'>
                                    <i class="ri-film-fill"></i>
                                    <h2>Movie</h2>
                                </div>
                                <h3>{eachTopRatedMovie.vote_average}</h3>
                            </div>
                            <h2 className="title">{eachTopRatedMovie.title}</h2>
                        </div>
                    </div> 
                    ))}
                </div>
        </div>
  )
}


export default TopRated