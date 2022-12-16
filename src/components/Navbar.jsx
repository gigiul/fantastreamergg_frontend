import React, { useState, } from 'react'
import Logo from '../assets/logo.png'
import { US } from 'country-flag-icons/react/3x2'
import { IT } from 'country-flag-icons/react/3x2'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'



const Navbar = () => {
  const [country, setCountry] = useState(false)

/* handle coutnry change */
  const handleCountry = () => {
    setCountry(!country)
  }

  /* handle menu click */
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }


  return (
    <div className='w-full'>
      <div className=' mx-8 mt-8 font-semibold '>
        <div className='flex justify-between'>
          <img src={Logo} alt='logo' width={100} />
        <ul className='flex flex-row gap-3 cursor-pointer md:visible invisible  '>
            <li>Home</li>
            <li>Creator Program</li>
            <li>Analytics</li>
            <li>Login</li>
            {country ? (<US onClick={handleCountry} title="United States" width={20} className=""/>) 
            :
             (<IT onClick={handleCountry} title="Italy" width={20} className=""/>)}
        </ul>
        <div className='md:hidden'>
          {!menu ? 
            ( 
              <div>
                <Bars3Icon onClick={handleMenu} className='w-5' />
              </div>

            ) 
            :
            (
              <div>
                <XMarkIcon onClick={handleMenu} className='w-5' />
              </div>
            )
          }
        </div>
        </div>
        {menu ? 
            (<div className='backdrop-blur-md w-full h-full px-8 absolute justify-between cursor-pointer'>
            <ul className='flex flex-col gap-3 cursor-pointer justify-center items-center pt-16 text-3xl'>
              <li className='border-b-2'>Home</li>
              <li className='border-b-2'>Creator Program</li>
              <li className='border-b-2'>Analytics</li>
              <li className='border-b-2'>Login</li>
              {country ? (<US onClick={handleCountry} title="United States" width={30} className=""/>)
              :
              (<IT onClick={handleCountry} title="Italy" width={30} className=""/>)}
            </ul>
         </div>)
            : 
            (<></>)}
    </div>
    </div>
  )
}

export default Navbar