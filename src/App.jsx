import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import TopRated from './pages/topRated/TopRated'
import SideBar from './components/sideBar/SideBar'
import MovieDetails from './pages/movieDetails/MovieDetails'
import Error from './pages/errorPage/Error'
import TVSeries from './pages/tvSeries/TVSeries'
import Bookmark from './pages/bookmark/Bookmark'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/topratedmovies' element={<TopRated/>}/>
        <Route path='/tv-series' element={<TVSeries/>}/>
        <Route path='/bookmark' element={<Bookmark/>}/>
        <Route path='/moviedetails/:movie_id' element={<MovieDetails/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
