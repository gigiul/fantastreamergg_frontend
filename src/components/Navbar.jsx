import React from 'react'
import {Logo} from '../assets/logo-fantastreamer.png'

const Navbar = () => {
  return (
    <div className='flex'>
        <img src='../assets/logo-fantastreamer.png' alt='logo' />
        <ul>
            <li>Home</li>
            <li>Creator Program</li>
            <li>Analytics</li>
            <li>Login</li>
            <li>Icon</li> 
        </ul>
    </div>
  )
}

export default Navbar