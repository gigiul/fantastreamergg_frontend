import React, { useState, useEffect } from 'react'
import xRay from '../assets/xray.png'
import Vinci from '../assets/sezioneVinci.svg'
import VinciB from '../assets/sezioneVinciBig.svg'

const Cards = () => {
    const [size, setSize] = useState(false)
    
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

  return (
    <div className='md:pt-32 pt-16 xl:px-64 px-16'>
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className=''>
                <p className='inline-block font-semibold'>Le nostre carte sono uniche nel loro genere.</p>
                <span className='text-gray-400'>Basate sulle fattezze di ogni streamer, ogni carta è stata realizzata a mano libera da alcuni dei più promettenti illustratori italiani. Un design semplice e lineare ideato sulla base delle più famose collezioni del mondo.</span>
            </div>
            <img src={xRay} alt='xray' width={450}/>
        </div>
        <div className='md:pt-24 pt- flex items-center justify-center'>
            <img className='md:hidden pt-16' src={Vinci} alt='vinci' width={800} />
            <img className='hidden md:flex' src={VinciB} alt='vincib' width={800} />
        </div>
    </div>
  )
}

export default Cards