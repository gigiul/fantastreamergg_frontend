import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Api = () => {
    
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
      setInputValue(event.target.value);
    }
    
    //get data request from backend
    const [data, setData] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3000/user')
        .then(res => {console.log(res.data); setData(res.data)})
        .catch(err => console.log(err));
    }, []);

    const PostDelete = (() => {
        Axios.delete(`http://localhost:3000/user/${inputValue}`)
        .then(res => {console.log(res.data); setData(res.data)})
        .catch(err => console.log(err));

        window.location.reload(); //i need to reload the page to see the changes
    });

    const arr = data.map((data, index) => {
        return (  
                <div className='pt-2'>
                    <div className='flex justify-center gap-4'>
                        <p>{data.id}</p>
                        <p>{data.name}</p>
                        <p>{data.email}</p>
                        <p>{data.password}</p>
                    </div>
                </div>
        )
    })


  return (
    <div>
        <Navbar />
        <div className='text-white pt-8'>
            {arr}
        </div>
        <div className='flex justify-center mt-4 b m-auto'>
            <input className='text-black' value={inputValue} onChange={handleInputChange} placeholder='insert id to delete:'></input>
            <button className=' px-2 border-4 border-[#ff0000] rounded-full max-w-[100px]' onClick={PostDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Api