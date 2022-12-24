import React from 'react'
import TumbLogo from '../assets/tumblurr.svg'
import MarzaLogo from '../assets/marza.svg'
import EvoxLogo from '../assets/evox.png'

const Trusted = () => {
  return (
    <div className='md:pt-32 pt-16 md:px-32 px-16'>
        <div className='text-center'>
            <h1>Trusted by</h1>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-2 items-center justify-center content-center'>
            <div className='flex items-center justify-center bg-cover'>
                <img className='' width={150} src={TumbLogo} alt="" />
            </div>
            <div className='flex items-center justify-center bg-cover'>
                <img className='' width={150} src={MarzaLogo} alt="" />
            </div>
            <div className='flex items-center justify-center bg-cover'>
                <img className='' width={70} src={EvoxLogo} alt="" />
            </div>
            <div className='flex items-center justify-center bg-cover'>
                <img className='' width={150} src={MarzaLogo} alt="" />
            </div>
            <div className='flex items-center justify-center bg-cover'>
                <img className='' width={70} src={EvoxLogo} alt="" />
            </div>
            <div className='flex items-center justify-center bg-cover'>
                <img className='' width={70} src={EvoxLogo} alt="" />
            </div>
            <div className='flex items-center justify-center bg-cover'>
                <img className='' width={150} src={TumbLogo} alt="" />
            </div>
            <div className='flex items-center justify-center bg-cover'>
                <img className='' width={150} src={MarzaLogo} alt="" />
            </div>
            <div className='flex items-center justify-center bg-cover'>
                <img className='' width={150} src={TumbLogo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Trusted