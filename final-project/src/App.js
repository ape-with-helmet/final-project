import React from 'react'
import PrivateComponents from './Components/PrivateComponents'
import NavBar from './Components/NavBar'
import Homepage from './Pages/Homepage'
import ContactPage from './Pages/ContactPage'
import P6 from './Pages/Productpages/P6'
import Search from './Components/Search'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Aboutus from './Pages/Aboutus'
import P1 from './Pages/Productpages/P1'
import P2 from './Pages/Productpages/P2'
import P3 from './Pages/Productpages/P3'
import P4 from './Pages/Productpages/P4'
import P5 from './Pages/Productpages/P5'
import PaymentForm from './Pages/PaymentForm'
import PaymentPage from './Pages/PaymentPage'
import ProfilePage from './Pages/ProfilePage'
import Cart from './Pages/Cart'
import PaymentSuccessful from './Pages/PaymentSuccessful'
import Profile from './Pages/Profile'
import AdminComponents from './Components/AdminComponents'
import AddProduct from './Pages/AddProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <br /><br />
        <Routes>
          <Route element={<AdminComponents/>}>
            <Route element={<AddProduct/>} path='/addProd'/>
          </Route>
          <Route element={<PrivateComponents />}>
            <Route element={<Profile />} path='/profile' />
            <Route element={<Cart />} path='/cart' />
            <Route element={<PaymentForm />} path='/PF' />
            <Route element={<PaymentPage />} path='/Pay' />
            <Route element={<Search />} path='/SR' />
            <Route element={<ProfilePage />} path='/pro'/>
            <Route element={<PaymentSuccessful />} path='/ps' />
          </Route>
          <Route element={<ContactPage />} path='/CP' />
          <Route element={<Homepage />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<Signup />} path='/signup' />
          <Route element={<Aboutus />} path='/about' />
          <Route element={<P1 />} path='/P1' />
            <Route element={<P2 />} path='/P2' />
            <Route element={<P3 />} path='/P3' />
            <Route element={<P4 />} path='/P4' />
            <Route element={<P5 />} path='/P5' />
            <Route element={<P6 />} path='/P6' />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App