import React from 'react'
import Navbar from '../components/Navbar'
import Axios from 'axios'

const Profile = () => {
    const token = localStorage.getItem('jwtToken');
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const getPrivate = () => 
    Axios.get('http://localhost:3000/profile')
    .then(response => {
         console.log(response.data)
    })
    .catch(err => console.log(err));;

  return (
    <div>
        <Navbar />
        <button className='text-white' onClick={getPrivate}>Get Private</button>
        
    </div>
  )
}

export default Profile