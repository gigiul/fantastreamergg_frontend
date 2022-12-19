import React from 'react'
import LI from '../assets/linkedin.png'
import DS from '../assets/discord.png'
import IG from '../assets/instagram.png'
import EM from '../assets/mail.png'

const Footer = () => {
  return (
    <div className='md:pt-24 pt-16'>
        <div className='flex items-center justify-center md:gap-8 gap-4'>
            <div className='border-stone-700 rounded-full border-2 p-2'>
                <img src={LI} alt="social" width={20} />
            </div>
            <div className='border-stone-700 rounded-full border-2 p-2'>
                <img src={DS} alt="social" width={20} />
            </div>
            <div className='border-stone-700 rounded-full border-2 p-2'>
                <img src={IG} alt="social" width={20} />
            </div>
            <div className='border-stone-700 rounded-full border-2 p-2'>
                <img src={EM} alt="social" width={20} />
            </div>
        </div>
        <div className='text-center py-4 font-sm'>
            <p>Playerself S.R.L C.F./PIVA16517011009</p>
            <p>Via Marsala 29H - 00185 Rome (RM)</p>
            <p>All Rights Reserved.</p>
            <p>Check out our Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer