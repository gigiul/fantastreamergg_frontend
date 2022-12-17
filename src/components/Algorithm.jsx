import React from 'react'
import ScoreEngine from '../assets/score.png' 

const Algorithm = () => {
  return (
    <div className='md:pt-32 pt-16 px-16'>
        <div className='flex flex-col justify-center items-center' >
            <h3>Il gioco è basato sul nostro</h3>
            <h1>Algoritmo Rivoluzionario</h1>
            <img src={ScoreEngine} alt="Score Engine" width={450} className=''/>
            <p className='max-w-2xl text-center md:-mt-40 -mt-20 text-sm md:text-xl mb-2 font-semibold'>L’algoritmo analizza tutte le variabili delle live come, follower, numero di spettatori e timing. Basato sul sistema di Machine Learning, elabora migliaia di dati al secondo per garantire in tempo reale il punteggio di ogni stream.</p>
            <span><a className='text-[#FEBB00]' href='/preregister'>Pre registrati</a></span>
        </div>
    </div>
  )
}

export default Algorithm