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

  function handleWheel(event) {
    window.scrollTo(0, 0);
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
                <Bars3Icon onClick={handleMenu} className=' w-5 cursor-pointer' />
              </div>

            ) 
            :
            (
              <div>
                <XMarkIcon onClick={handleMenu} className='text-black z-20 w-5 cursor-pointer fixed' />
              </div>
            )
          }
        </div>
        </div>
        {menu ? 
            (<div className={ menu ? ('ease-in duration-500 fixed text-gray-300 left-0 top-0 w-full h-screen bg-white px-4 py-7 flex-col z-10 ')
              : ('absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10')}>
            <ul onWheel={handleWheel} className='flex flex-col gap-3 w-full h-screen text-black cursor-pointer justify-center fixed items-center text-3xl overflow-hidden '>
            <li className='border-b-2'><Link to='/'>Home</Link></li>
            <li className='border-b-2'><Link to='/creator'>Creator Program</Link></li>
            <li className='border-b-2'><Link to='/analytics'>Analytics</Link></li>
            <li className='border-b-2'><Link to='/login'>Login</Link></li>
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