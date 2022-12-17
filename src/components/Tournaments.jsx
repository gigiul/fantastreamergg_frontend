import React from 'react'
import Tor1 from '../assets/Tor1.png'
import Tor2 from '../assets/Tor2.png'
import Tor3 from '../assets/Tor3.png'
import Tor4 from '../assets/Tor4.png'
import Tor5 from '../assets/Tor5.png'
import Tor6 from '../assets/Tor6.png'
import Clock from '../assets/clock.png'

const Tournaments = () => {
  return (
    <div className='md:pt-32 pt-16 md:mx-32 px-8 '>
        <div className='grid md:grid-cols-2 grid-rows-1 bg-white rounded-3xl text-black'>
            <div className='flex justify-center items-center'>

            <div className='grid grid-cols-3 gap-x-16 gap-y-4 p-8 '>
                <img src={Tor1} alt='tor1' width={60} />
                <img src={Tor2} alt='tor2' width={60} />
                <img src={Tor3} alt='tor3' width={60} />
                <img src={Tor4} alt='tor4' width={60} />
                <img src={Tor5} alt='tor5' width={60} />
                <img src={Tor6} alt='tor6' width={60} />
            </div>
            </div>
            <div className='flex flex-col items-center justify-center p-8'>
                <h1 className='text-3xl'>Partecipa ai Tornei</h1>
                <br />
                <p className='text-center'>Iscriviti ai tornei e competi sulla base delle reali prestazioni degli streamer.</p>
                <span><a className='text-[#FEBB00]' href='/preregister'>Pre registrati</a></span>
            </div>
        </div>
        <div className='flex md:flex-row flex-col items-center gap-4 pt-8 px-8 md:px-32'>
            <div className=''>
                <img className='' src={Clock} alt='clock' width={120} />
            </div>
            <div className=''>
                <p className='inline-block'>Tornei frequenti e differenti.</p>
                <span className='text-gray-400'> Sono presenti tantissime tipologie di tornei. Questi sono basati sulle differenti rarità delle carte che puoi schierare, dalla stagionalità e molto altro. Ogni settimana troverai tantissime nuove competizioni a cui partecipare.</span>
            </div>
        </div>
        <div className='flex flex-col-2 justify-center pt-8  md:gap-20 gap-12'>
            <div>
                <p>Ogni</p>
                <p className='text-green-400 font-bol text-4xl py-2'>96h</p>
                <p>un nuovo torneo</p>
            </div>
            <div>
                <p>Fino a</p>
                <p className='text-green-400 font-bol text-4xl py-2'>#10</p>
                <p>diverse tipologie</p>
            </div>
        </div>
    </div>
  )
}

export default Tournaments