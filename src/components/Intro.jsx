import React from 'react'
import Logo from '../assets/logo.png'
import Marza from '../assets/marza3.png'
import Blur from '../assets/blur4.png'
import Google from '../assets/google.png'
import Apple from '../assets/apple.png'

const Intro = () => {
  return (
    <div className='pt-32 px-16 '>
        <div className='flex justify-center gap-4'>
            <div className='flex flex-col max-w-lg'>
                <img src={Logo} alt='logo' width={200}/>
                <h2>L'intrattenimento che paga.</h2>
                <h3>Il nuovo gioco ispirato al fantacalcio, applicato al mondo del videogames streaming.</h3>
                <span><a className='text-[#FEBB00]' href='/preregister'>Pre registrati</a></span>
            </div>
            <div className='flex items-center'>
                <img src={Marza} alt='marza' width={120} className='' />
                <img src={Blur} alt='blur' width={140} />
            </div>
        </div>
        <div className='text-center pt-16'>
            <p>A breve disponibile su:</p>
            <div className='flex items-center justify-center'>
                <img src={Google} alt="/google" className='' width={140} />
                <img src={Apple} alt="apple" className='' width={140} />
            </div>
        </div>
    </div>
  )
}

export default Intro