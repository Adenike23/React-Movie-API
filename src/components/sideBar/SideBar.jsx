import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


const SideBar = () => {
  
  const location = useLocation()
  // console.log(location);
    const navigate = useNavigate()
  return (
    <div className='bg-slate-800 '>
        <div className='hidden sm:flex sm:flex-col sm:absolute sm:top-[10rem] left-0 h-[100vh] bg-slate-800 sm:ms-10 sm:my-5 px-5 sm:rounded-2xl text-white md:justify-start'>
            {location.pathname=== '/' ?  <div onClick={()=> navigate('/')} title='now playing' className='py-6 text-4xl cursor-pointer text-indigo-800'><i class="ri-clapperboard-fill"></i></div>
            :  <div onClick={()=> navigate('/')} title='now playing' className='py-6 text-4xl cursor-pointer'><i class="ri-clapperboard-fill"></i></div>}
            {location.pathname === '/topratedmovies' ?  <div onClick={()=> navigate('/topratedmovies')} title='top-rated movies' className='film py-1 text-2xl cursor-pointer text-indigo-800'><i class="ri-film-fill"></i></div>
            :  <div onClick={()=> navigate('/topratedmovies')} title='top-rated movies' className='film py-1 text-2xl cursor-pointer'><i class="ri-film-fill"></i></div>}
            {location.pathname === '/tv-series' ? <div onClick={()=> navigate('/tv-series')} title='tv-series' className='py-5 text-2xl text-indigo-800 cursor-pointer'><i class="ri-tv-fill"></i></div>
            : <div onClick={()=> navigate('/tv-series')} title='tv-series' className='py-5 text-2xl cursor-pointer'><i class="ri-tv-fill"></i></div>}
            {location.pathname === '/bookmark' ? <div onClick={()=> navigate('/bookmark')} title='bookmark' className='py-3 text-2xl text-indigo-800 cursor-pointer'><i class="ri-bookmark-fill"></i></div>
            : <div onClick={()=> navigate('/bookmark')} title='bookmark' className='py-3 text-2xl cursor-pointer'><i class="ri-bookmark-fill"></i></div>}
        </div>
    </div>
  )
}

export default SideBar