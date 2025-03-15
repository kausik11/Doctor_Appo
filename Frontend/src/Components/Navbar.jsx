import React from 'react'
import {assets} from '../assets/assets_frontend/assets.js'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-4 border-b border-b-gray-400'>
      <img src={assets.logo} alt='logo' className=' w-44 cursor-pointer'/>
       <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink>
             <li className='py-1'>Home</li>
             <hr className='border-none outline-none h-0.5 text-secondary w-3/5 m-auto'/>
        </NavLink>
        <NavLink>
        <li className='py-1'>All Doctors</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
        </NavLink>
        <NavLink>
        <li className='py-1'>About</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
        </NavLink>
        <NavLink>
        <li className='py-1'>Contact</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
        </NavLink>
      </ul>
      <div>
        <button>Create Account</button>
      </div>
    </div>
  )
}

export default Navbar
