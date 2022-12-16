import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { US } from 'country-flag-icons/react/3x2'
import { IT } from 'country-flag-icons/react/3x2'



const Navbar = () => {
  const [country, setCountry] = useState(false)

/* handle coutnry change */
  const handleCountry = () => {
    setCountry(!country)
  }


  return (
    <div className=' mx-8 mt-8 font-semibold'>
        <div className='flex justify-between'>
          <img src={Logo} alt='logo' width={150} />
        <ul className='flex flex-row gap-3 cursor-pointer'>
            <li>Home</li>
            <li>Creator Program</li>
            <li>Analytics</li>
            <li>Login</li>
            {country ? (<US onClick={handleCountry} title="United States" width={20} className=""/>) 
            :
             (<IT onClick={handleCountry} title="Italy" width={20} className=""/>)}
        </ul>
        </div>
    </div>
  )
}

export default Navbar