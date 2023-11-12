import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const PopularMoviesCard = ({popular, popularMovie}) => {
    const base_url = "https://image.tmdb.org/t/p/w300/"
    const navigate = useNavigate()
    const [isBookmarked, setIsBookmarked] = useState(false);
    const bookmarkedMovies = JSON.parse(localStorage.getItem('movieContent')) || []

  const handleBookmarkClick = (id) => {
    setIsBookmarked(!isBookmarked);
    const movieBookmark = popular.find(movie => movie.id === +id) 
    bookmarkedMovies.push(movieBookmark)
    localStorage.setItem('movieContent', JSON.stringify(bookmarkedMovies))
    // location.reload()
  };


    

  return (
    <div>
        <div className='rounded-lg cursor-pointer'>
                <img src={`${base_url}${popularMovie.poster_path}`} alt="movie-image" onClick={()=> navigate(`/moviedetails/${popularMovie.id}`)} className='rounded-lg w-[100%] hover:scale-105 duration-1000'/>
                <div className='p-2'>
                    <div className="flex gap-3">
                        <h1>{popularMovie.release_date.split('').splice(0, 4).join('')}</h1>
                        <div className='flex gap-1'>
                            <i class="ri-film-fill"></i>
                            <h2>Movie</h2>
                        </div>
                        <h3>{popularMovie.vote_average}</h3>
                    </div>
                    <div className='flex justify-between items-center'>
                      <h2 className="title">{popularMovie.title}</h2>
                      <div onClick={() => handleBookmarkClick(`${popularMovie.id}`)}>{
                      isBookmarked ? <i class="ri-bookmark-fill"></i> : <i class="ri-bookmark-line"></i>
                      }</div>
                    </div>
                </div>
        </div> 
    </div>
  )
}

export default PopularMoviesCard