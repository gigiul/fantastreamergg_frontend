import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Axios from 'axios'
import { useEffect } from 'react'

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);

    const postData = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/user', {
            name,
            email,
            password
        }).then(res => console.log('posting data', res)).catch(err => console.log(err));
    }

{/*    get data request from backend
        useEffect(() => {
        Axios.get('http://localhost:3000/user').then(res => {console.log(res.data); setData(res.data)}).catch(err => console.log(err));
    }, []);*/}

  return (
    <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='text-white'>
                <form className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl uppercase'>Sign Up</h1>
                    <input onChange={(e) => setName(e.target.value)} type='text' value={name} placeholder='Name' className='bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900' />
                    <input onChange={(e) => setEmail(e.target.value)} type='text' value={email} placeholder='Email' className='bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900' />
                    <input onChange={(e) => setPassword(e.target.value)} type='password' value={password} placeholder='Password' className='bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900' />
                    <button onClick={postData} className='border-gray-700 border-2 bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900'>Sign Up</button>
                </form>
                <div className='flex justify-end pt-1'>
                    <p className='text-sm'>Already registered? <a href='/login'> Sign In</a></p>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Login