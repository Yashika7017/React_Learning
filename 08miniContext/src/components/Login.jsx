import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import React from 'react';


function Login() {
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div className='flex flex-col my-15'>
            <h2 className='mb-30'>Login Page</h2>
            <input className='rounded-md border-none bg-gray-800 mb-8 pt-6 text-lg text-center' type='text'
            value={username} onChange={(e) =>setUsername(e.target.value ) } 
            placeholder='username' />
            {" "}
            <input className='rounded-md border-none bg-gray-800 mb-8 pt-6 text-lg text-center '  type='text'
            value={password}onChange={ (e) => setPassword (e.target.value)}
            placeholder ='password' />
            <button  onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;
