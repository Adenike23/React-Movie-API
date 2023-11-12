import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Bookmark = () => {
  
  const base_url = "https://image.tmdb.org/t/p/w500/"
  const navigate = useNavigate()
  const [uniqueArray, setUniqueArray] = useState([])
  const bookmarkedMovies = JSON.parse(localStorage.getItem('movieContent'))
 

  const removeBookmarkedMovie = (id) => {
    let index = uniqueArray.findIndex(movie => movie.id === id);
    uniqueArray.splice(index, 1);
    localStorage.setItem('movieContent', JSON.stringify(uniqueArray));
    location.reload()
    // console.log(id);
  }

  const uniqueObjects = new Set(bookmarkedMovies)
  bookmarkedMovies && bookmarkedMovies.forEach(obj => {
    // Check if the object's ID is not already in the set
    if (!uniqueObjects.has(obj.id)) {
      uniqueObjects.add(obj.id); // Add the ID to the set
      uniqueArray.push(obj); // Add the object to the unique array
    }
  })
  useEffect(() => {
    setUniqueArray(uniqueArray)
  }, [])
  return (
    <div className='bg-slate-900'>
          <p className='text-2xl text-white flex justify-center items-center'>Bookmarks</p>
        <div className="bg-slate-900 px-12 text-white sm:ps-[10rem] min-h-[100vh] pt-[5rem]">
          {uniqueArray.length === 0 ? <p className='absolute left-[50%] top-[50%] -translate-x-[50%]'>NO MOVIE FOUND</p> : 
          <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>{uniqueArray.map(movie => (
            <div className='rounded-lg cursor-pointer'>
            <img src={`${base_url}${movie.poster_path}`} alt="" onClick={()=> navigate(`/moviedetails/${movie.id}`)} className='rounded-lg  hover:scale-105 duration-1000'/>
            <div className='p-2'>
                <div className="flex gap-3">
                    <h1>{movie.release_date.split('').splice(0, 4).join('')}</h1>
                    <div className='flex gap-1'>
                        <i class="ri-film-fill"></i>
                        <h2>Movie</h2>
                    </div>
                    <h3>{movie.vote_average}</h3>
                </div>
                <div className="flex justify-between items-center gap-5">
                  <h2 className="title">{movie.title}</h2>
                  <div onClick={() => removeBookmarkedMovie(movie.id)}><i class="ri-bookmark-fill"></i></div>
                </div>
            </div>
        </div> 
        ))} </div>}
        </div>
    </div>
  )
}

export default Bookmark