import React from 'react'
import S1 from '../assets/1.png'

const Who = () => {
  return (
    <div className='md:pt-16 pt-16'>
        <div className='md:px-32 px-16'>
            <div className='flex flex-col md:text-left justify-center md:text-xl'>
                <h2 className='md:text-3xl text-xl'>Colleziona le carte.</h2>
                <h1 className='md:text-4xl text-xl'>Solo i migliori gamer  <br /> in circolazione.</h1>
                <span><a className= 'text-[#FEBB00]' href='/preregister'>Pre registrati</a></span>
            </div>
            <div className='grid grid-rows md:grid-cols-2 gap-4 mt-8 items-center justify-center'>
                <div className='bg-stone-800 rounded-xl font-bold lg:text-2xl text-md p-8'>
                        <p>Gioca con le carte dei più famosi content creator. Adesso in una versione unica al mondo.</p>
                </div>
                <div className='bg-stone-800 rounded-xl font-bold lg:text-2xl text-md p-8'>
                        <p className='inline-block'>Un valore reale.</p>
                        <span className='text-gray-400'> Ottieni, scambia e vendi le carte più rare in circolazione.</span>    
                </div>
            </div>
        </div>
        
        {/*Scroll bar list */}
        <div className='pt-12 mx-auto w-[22rem] md: sm:w-[36rem] max-w-5xl md:w-full'>
            <ul className='flex gap-4 p-4 overflow-x-auto whitespace-nowrap no-scrollbar'>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                <li onClick={()=> window.open("https://twitch.com", "_blank")}
                    className='flex-shrink-0 border-[3px] border-white rounded-xl  cursor-pointer hover:scale-105'>
                    <img className='rounded-xl'
                    src={S1} alt="S1" width={70} />
                </li>
                                        
            </ul>
        </div>
    </div>
  )
}

export default Who