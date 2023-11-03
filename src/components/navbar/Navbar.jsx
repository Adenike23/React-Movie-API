import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


const Navbar = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()


  return (
    <div className='bg-slate-800'>
      <div className='bg-slate-900 py-6 px-3 flex items-center justify-between sm:justify-center'>
          <h1 className='p-5 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-900'>Movieland</h1>
          <div onClick={()=> setToggleMobileNav((curr) => !curr)} className='bg-slate-900 text-3xl sm:hidden ps-10 text-white'><i class="ri-menu-fill"></i></div>
      </div>
      {toggleMobileNav && <div className='flex w-[80%] text-white items-center justify-around mx-auto sm:hidden'>
          {location.pathname=== '/' ?  <div onClick={()=> navigate('/')} className='py-6 text-4xl cursor-pointer text-red-600'><i class="ri-clapperboard-fill"></i></div>
          :  <div onClick={()=> navigate('/')} className='py-6 text-4xl cursor-pointer'><i class="ri-clapperboard-fill"></i></div>}
          {location.pathname === '/topratedmovies' ?  <div onClick={()=> navigate('/topratedmovies')} className='film py-1 text-2xl cursor-pointer text-red-600'><i class="ri-film-fill"></i></div>
          :  <div onClick={()=> navigate('/topratedmovies')} className='film py-1 text-2xl cursor-pointer'><i class="ri-film-fill"></i></div>}
          {location.pathname === '/tv-series' ? <div onClick={()=> navigate('/tv-series')} className='py-5 text-2xl text-red-600 cursor-pointer'><i class="ri-tv-fill"></i></div>
          : <div onClick={()=> navigate('/tv-series')} className='py-5 text-2xl cursor-pointer'><i class="ri-tv-fill"></i></div>}
          {location.pathname === '/bookmark' ? <div className='py-3 text-2xl text-red-600 cursor-pointer'><i class="ri-bookmark-fill"></i></div>
          : <div className='py-3 text-2xl cursor-pointer'><i class="ri-bookmark-fill"></i></div>}
        </div>}
    </div>
  )
}

export default Navbar