import React from 'react'
import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage'
import ProductPage from './Pages/ProductPage'
import SearchResult from './Pages/SearchResult'
import Footer from './Components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <br/>
      <Routes>
        <Route element={<Homepage/>} path='/'/>
        <Route element={<ProductPage/>} path='/PP'/>
        <Route element={<SearchResult/>} path='/SR'/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App