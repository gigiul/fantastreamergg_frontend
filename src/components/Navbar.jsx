import React, { useState, } from 'react'
import Logo from '../assets/logo.png'
import { US } from 'country-flag-icons/react/3x2'
import { IT } from 'country-flag-icons/react/3x2'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [country, setCountry] = useState(true)
  const [language, setLanguage] = useState(true)
  const navigate = useNavigate();

/* handle coutnry change */
  const handleCountry = () => {
    setCountry(!country)
    language ? navigate('/en') : navigate('/')
    setLanguage(!language)
  }

  /* handle menu click */
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  console.log("language", language);
  console.log("country", country);

  return (
      <div className=' pt-8 px-8 '>
        <div className='flex justify-between'>
          <Link to='/' smooth={true} duration={500}><img src={Logo} alt='logo' width={150} /></Link>
          {/*<h1>FANTASTREAMER</h1>*/}
        <ul className='md:flex flex-row gap-3 cursor-pointer hidden items-center'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/creator'>Creator Program</Link></li>
            <li><Link to='/analytics'>Analytics</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li>
            {country ? (<US onClick={handleCountry} title="United States" width={20} className=""/>) 
            :
             (<IT onClick={handleCountry} title="Italy" width={20} className=""/>)}
            </li>
        </ul>
        <div className='md:hidden'>
          {!menu ? 
            ( 
              <div>
                <Bars3Icon onClick={handleMenu} className='w-5 cursor-pointer' />
              </div>

            ) 
            :
            (
              <div>
                <XMarkIcon onClick={handleMenu} className='w-5 cursor-pointer' />
              </div>
            )
          }
        </div>
        </div>
        {menu ? 
            (<div className='backdrop-blur-md  cursor-pointer'>
            <ul className='flex flex-col gap-3 w-full bg-white text-black cursor-pointer absolute justify-center items-center py-16 text-3xl'>
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
  )
}

export default Navbar