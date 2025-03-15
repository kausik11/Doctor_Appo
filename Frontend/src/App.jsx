import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/Pages/Home'
import Doctors from '../src/Pages/Doctors'
import About from '../src/Pages/About'
import Contact from '../src/Pages/Contact'
import Login from '../src/Pages/Login'
import Appointment from '../src/Pages/Appointment'
import MyAppointment from '../src/Pages/MyAppointment'
import MyProfile from '../src/Pages/MyProfile'
import PNF from '../src/Pages/PNF.jsx'
import Navbar from './Components/Navbar.jsx'
import '../src/index.css'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointment />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='*' element={<PNF />} />
        {/* <Route path='/verify' element={<Verify />} /> */}
      </Routes>
    </div>
  )
}

export default App
