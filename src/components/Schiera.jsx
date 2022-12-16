import React from 'react'
import Squadra from '../assets/squadra.png'

const Schiera = () => {
  return (
    <div className='pt-16 md:pt-32 px-16'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
            <div className='flex flex-col '>
                <h1 className='text-3xl md:max-w-[70%] md:text-left text-center'>Scopri. Scegli. Colleziona. Scambia. Schiera.</h1>
                <br />
                <h2>Gioca con le carte dei migliori streamer.</h2>
                <h3>Componi il tuo Dream Team e schiera la tua migliore formazione.</h3>
            </div>
            <img className='' src={Squadra} alt='squadra' width={450} />
        </div>

    </div>
  )
}

export default Schiera