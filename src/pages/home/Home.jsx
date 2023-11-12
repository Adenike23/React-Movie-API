import React, { useEffect, useState } from 'react'
import HomeCard from '../../components/homeCard/HomeCard'
import PopularMoviesCard from '../popularMovies/PopularMovies'
import loadingImage from '../../assets/images/loading-img.gif'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'


const Home = () => {
    const [movieContent, setMovieContent] = useState()
    const [popular, setPopular] = useState()
    const [loading, setLoading] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [movieArray, setMovieArray] = useState([])

    const getMovies = async() =>{
        setLoading(true)
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IxMWYxZWExZWIzZTM4M2JhYzc5OTgzNTQxN2M3MyIsInN1YiI6IjY1MmFjZGNhMzU4ZGE3MDBhZDM0Y2Y4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2RM065u2w5bgyDaF_klJGbOCv4ZNjeFBEYxHqxkWLtE'
            }
        })
        const data = await response.json()
        setMovieContent(data.results)
        // setMovieContent(data.results.slice(0, 6))
        if(response) setLoading(false)
    }
    console.log(movieContent);
    useEffect(()=>{
        getMovies()
    }, [])

    const getPopularMovies = async() =>{
        setLoading(true)
        const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2IxMWYxZWExZWIzZTM4M2JhYzc5OTgzNTQxN2M3MyIsInN1YiI6IjY1MmFjZGNhMzU4ZGE3MDBhZDM0Y2Y4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2RM065u2w5bgyDaF_klJGbOCv4ZNjeFBEYxHqxkWLtE'
            }
        })
        const data = await response.json()
        if(response) setLoading(false)
        if(response.ok) {
            setPopular(data.results) 
        }
    }
    useEffect(()=>{
        getPopularMovies()
    }, [])
    


  return (
    <div className='bg-slate-900 px-12 text-white sm:ps-[10rem] py-5'>
            <div className='flex gap-5 rounded-2xl items-center text-white border w-[95%] bg-slate-800 border-black py-2 px-4 mb-10'>
                <div className="text-xl"><i class="ri-search-line"></i></div>
                <input onChange={(event)=>setSearchInput(event.target.value)} className='p-3 outline-none w-[100%] bg-slate-800' type="search" name="search" id="" placeholder='Search for movies or TV series'/>
            </div>
        
        
            <div>
                <h1 className='mb-5 text-2xl sm:ms-[7rem] md:ms-0'>Now Playing</h1>
                <div className='w-[15%] mx-auto'>{loading === true ? <img src={loadingImage}/> : ''}</div>
                <div className=''>
                <Carousel showArrows={true} onChange={true} autoPlay={true} infiniteLoop={true}>
                    {movieContent && movieContent.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase())).map(movie => (
                        <HomeCard movie={movie}/>
                    ))}
                </Carousel>
                    {/* <div className='relative'>
                        <img src={image2} alt="" className='rounded-xl opacity-80'/>
                        <div className="absolute top-4 right-5"><i class="ri-bookmark-line"></i></div>
                        <div className="absolute bottom-3 left-4">
                            <div className="flex gap-2">
                                <h1>2019</h1>
                                <div className='flex gap-1'>
                                    <i class="ri-film-fill"></i>
                                    <h2>Movie</h2>
                                </div>
                                <h3>PG</h3>
                            </div>
                            <h4 className='font-bold text-lg'>Beyond Earth</h4>
                        </div>
                    </div> */}
                   
                    
                </div>
            
                <h1 className='mt-28 text-2xl'>Popular movies for you</h1>
                <div className='w-[15%] mx-auto'>{loading === true ? <img src={loadingImage}/> : ''}</div>
                <div className="grid place-content-center grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
                    {popular && popular.filter(popularMovie => popularMovie.title.toLowerCase().includes(searchInput.toLowerCase())).map(popularMovie =>(
                        <PopularMoviesCard popularMovie={popularMovie} popular={popular}/>
                        ))}
                {/* <div className='border border-black shadow-2xl rounded-lg w-[90%]'>
                        <img className='h-[70%] w-[100%] rounded-lg' src={image1} alt="" />
                        <div className='p-2'>
                            <div className="flex gap-2">
                                <h1>2019</h1>
                                <div className='flex gap-1'>
                                    <i class="ri-film-fill"></i>
                                    <h2>Movie</h2>
                                </div>
                                <h3>PG</h3>
                            </div>
                            <h2 className="title">Batman and Superman: Dawn of Justice</h2>
                        </div>
                    </div>*/}
                </div>
            </div>
    </div>
  )
}

export default Home