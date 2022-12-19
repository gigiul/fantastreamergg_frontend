import React from 'react'
import Common from '../assets/common-svg.svg'
import CommonS from '../assets/common_stars.svg'
import Uncommon from '../assets/uncommon-svg.svg'
import UncommonS from '../assets/uncommon_stars.svg'
import Rare from '../assets/rare-svg.svg'
import RareS from '../assets/rare_stars.svg'
import Epic from '../assets/epic-svg.svg'
import EpicS from '../assets/epic_stars.svg'
import Legendary from '../assets/legendary-svg.svg'
import LegendaryS from '../assets/legendary_stars.svg'
import Mano from '../assets/blur_hand.svg'

const Rarities = () => {
  return (
    <div className='md:pt-32 pt-16'>
        <div className='flex flex-col text-center'>
            <p className='font-semibold'>Un gioco competitivo</p>
            <h1 className='pt-2'>Basato sulla rarità delle carte.</h1>
            <p className='pt-4 text-gray-400'> Ogni personaggio è presente in diverse rarità. <br /> Collezionali tutti.</p>
            <span><a className='text-[#FEBB00]' href='/preregister'>Pre registrati</a></span>
        </div>
        {/*Cards description*/}
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 md:pt-24 pt-16 md:mx-32 mx-16'>
            <div className='bg-white text-black rounded-xl'>
                <div className='flex gap-4 items-center mx-8 my-4'>
                    <img src={Common} alt="Common" />
                    <h2 className='flex'>Comuni</h2>
                </div>
                <p className='pt-4 font-semibold mx-8'>Per ottenere le carte Comuni ti basterà creare un nuovo account. Nella beta, possono essere vinte partecipando ai tornei o completando le quest.</p>
                <p className='text-gray-400 text-sm pt-4 mx-8'>Rarity:</p>
                <img src={CommonS} alt="Common" width='40%' className='pt-2 mx-8 pb-4' />
            </div>
            <div className='bg-white text-black rounded-xl'>
                <div className='flex gap-4 items-center mx-8 my-4'>
                    <img src={Uncommon} alt="Common" />
                    <h2 className='flex'>Non Comuni</h2>
                </div>
                <p className='pt-4 font-semibold mx-8'>Le Non Comuni potranno essere acquistate tramite asta, bundle oppure da altri utenti. Sarà inoltre possibile vincerle nei tornei “Comuni e Non Comuni”.</p>
                <p className='text-gray-400 text-sm pt-4 mx-8'>Rarity:</p>
                <img src={UncommonS} alt="Common" width='40%' className='pt-2 mx-8 pb-4' />
            </div>
            <div className='bg-white text-black rounded-xl'>
                <div className='flex gap-4 items-center mx-8 my-4'>
                    <img src={Rare} alt="Common" />
                    <h2 className='flex'>Rare</h2>
                </div>
                <p className='pt-4 font-semibold mx-8'>Le Rare avranno una disponibilità ridotta. Potrai ottenerle partecipando alle aste, dagli altri utenti o tramite bundle. Con esse avrai accesso ai tornei Rari.</p>
                <p className='text-gray-400 text-sm pt-4 mx-8'>Rarity:</p>
                <img src={RareS} alt="Common" width='40%' className='pt-2 mx-8 pb-4' />
            </div>
            <div className='bg-white text-black rounded-xl'>
                <div className='flex gap-4 items-center mx-8 my-4'>
                    <img src={Epic} alt="Common" />
                    <h2 className='flex'>Epiche</h2>
                </div>
                <p className='pt-4 font-semibold mx-8'>Esistono solo 10 carte Epiche per ogni streamer. Ottienile per partecipare ai tornei più ambiti nel gioco.</p>
                <p className='text-gray-400 text-sm pt-4 mx-8'>Rarity:</p>
                <img src={EpicS} alt="Common" width='40%' className='pt-2 mx-8 pb-4' />
            </div>
            <div className='bg-white text-black rounded-xl md:col-span-2 col-span-1'>
                <div className='flex md:flex-row flex-col-reverse items-center'>
                    <img src={Mano} alt="mano" width="250"/>
                    <div className='md:m-16'>
                        <div className='flex gap-4 items-center mx-8 my-4'>
                            <img src={Legendary} alt="Common" />
                            <h2 className='flex'>Leggendarie</h2>
                        </div>
                        <p className='pt-4 font-semibold mx-8'>Le Leggendarie sono l’ultimo livello di rarità. Ne esiste soltanto una per ogni streamer. Ottienile e ricevi una carta reale.</p>
                        <p className='text-gray-400 text-sm pt-4 mx-8'>Rarity:</p>
                        <img src={LegendaryS} alt="Common" width='40%' className='pt-2 mx-8 pb-4' />
                    </div>
                    
                </div>
            </div>
                

            

            
        </div>
    </div>
  )
}

export default Rarities