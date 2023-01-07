import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    //post request for signup
    const postDataSignup = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/user', {
            name,
            email,
            password
        }).then(res => console.log('posting data', res)).catch(err => console.log(err));
        //navigate('/profile');
        window.location.reload();
    }

    //post request for signin
    async function postDataSignin(e) {
        e.preventDefault();
        await Axios.post('http://localhost:5000/auth/login', {
            email,
            password
        }).then(res => {
            const token = res.data.access_token;
            console.log(res.data.access_token)
            localStorage.setItem('jwtToken', token);
          }).catch(err => console.log(err));

        //navigate('/profile');
        const token = localStorage.getItem('jwtToken');
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        await Axios.get('http://localhost:5000/profile')
        .then(response => {
             console.log(response.data.message)
        })
        .catch(err => console.log(err));

        navigate('/profile')
        
    }


    //state for signin & signup form    
    const [showSigninFrom, setshowSigninFrom] = useState(true);
    const [showSignupForm, setShowSignupForm] = useState(false);
  
    function handleSigninClick() {
        if(showSignupForm)
        setShowSignupForm(false);
        setshowSigninFrom(true);
      if(showSigninFrom)
        setShowSignupForm(false);
    }
  
    function handleSignupClick() {
        if(showSigninFrom)  
            setshowSigninFrom(false);
        setShowSignupForm(true);
        if(showSignupForm)  
            setshowSigninFrom(false);
    }

  return (
    <div>
        <Navbar />
        <div className=' pt-32'>
            <div className='flex justify-center gap-12'>
              <button className='border-2 rounded-2xl p-4 border-white' onClick={handleSigninClick}>Sign In</button>
              <button className='border-2 rounded-2xl p-4 border-white' onClick={handleSignupClick}>Sign Up</button>
            </div>
        </div>

      {
        showSigninFrom && (
            <div className='flex flex-col justify-center items-center pt-16'>
            <div className='text-white'>
                <form className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl uppercase'>Sign In</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type='text' value={email} placeholder='Email' className='bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900' />
                    <input onChange={(e) => setPassword(e.target.value)} type='password' value={password} placeholder='Password' className='bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900' />
                    <button onClick={postDataSignin} className='border-gray-700 border-2 bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900'>Sign In</button>
                    
                </form>
                <div className='flex justify-end pt-1'>
                    <p className='text-sm'>Not registered? <span className='cursor-pointer' onClick={handleSignupClick}> Sign Up</span></p>
                </div>
        </div>
        </div>)
      }
      {
        showSignupForm && (
            <div className='flex flex-col justify-center items-center pt-16'>
            <div className='text-white'>
                <form className='flex flex-col justify-center items-center'>
                    <h1 className='text-4xl uppercase'>Sign Up</h1>
                    <input onChange={(e) => setName(e.target.value)} type='text' value={name} placeholder='Name' className='bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900' />
                    <input onChange={(e) => setEmail(e.target.value)} type='text' value={email} placeholder='Email' className='bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900' />
                    <input onChange={(e) => setPassword(e.target.value)} type='password' value={password} placeholder='Password' className='bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900' />
                    <button onClick={postDataSignup} className='border-gray-700 border-2 bg-gray-800 text-white w-80 h-10 rounded-md mt-4 hover:bg-gray-900'>Sign Up</button>
                    
                </form>
                <div className='flex justify-end pt-1'>
                    <p className='text-sm'>Already registered? <span className='cursor-pointer' onClick={handleSigninClick}> Sign In</span></p>
                </div>
        </div>
        </div>)

      }
    </div>
  )
}

export default Login