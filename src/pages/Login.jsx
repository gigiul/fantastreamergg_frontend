import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Axios from 'axios'
import { useEffect } from 'react'

const Login = () => {

    const [data, setData] = useState([]);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const arr = data.map((data, index) => {
        return (
            <p className='flex flex-col text-center justify-center uppercase'>{data.name}</p>
        )
    })

    useEffect(() => {
        Axios.get('http://localhost:3000/user').then(res => {console.log(res.data); setData(res.data)}).catch(err => console.log(err));
    }, []);

  return (
    <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='text-white'>
                {click ? <h1>{arr}</h1>
                 : <></>}
            </div>
            {!click ? <button onClick={handleClick} className='text-white '>Show Data</button> : <button onClick={handleClick} className='text-white '>Close Data</button>}
            
        </div>
    </div>
  )
}

export default Login