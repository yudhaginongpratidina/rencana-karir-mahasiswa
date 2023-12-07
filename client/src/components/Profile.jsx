import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './elements/Input'

const Profile = () => {

    const navigate = useNavigate();

    const [image, setImage] = useState('')
    const [fullName, setFullName] = useState('Admin 1')
    const [email, setEmail] = useState('admin@gmail.com')
    const [password, setPassword] = useState('kesehatan')
    const [re_Password, setRePassword] = useState('kesehatan')

    useEffect(() => {
        const localStorageKey = 'Credentials'
        const credentials = JSON.parse(localStorage.getItem(localStorageKey))
        const Profile = credentials?.profile
        setImage(Profile)
    })

    const LogOut = async () => {
        try {
            localStorage.removeItem('Credentials')
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-full max-w-xl mx-auto mt-10 p-6 bg-white border rounded-lg shadow-xl"'>
                <img
                    className='w-24 mx-auto mb-6 -mt-20 border rounded-full' 
                    src={image} 
                    alt="" 
                />

                <h1 className='text-2xl font-medium mb-6 text-center'>PROFILE</h1>

                <Input type="text" name="Full Name" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <Input type="email" name="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" name="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" name="Re-Password" placeholder="Re-Password" value={re_Password} onChange={(e) => setRePassword(e.target.value)} />

                <div className='grid grid-cols-3 gap-x-2'>
                    <button className='w-full py-2 bg-blue-600 text-white mt-3 rounded hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600'> Update </button>
                    <button className='w-full py-2 bg-blue-600 text-white mt-3 rounded hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600'> Delete </button>
                    <button onClick={LogOut} className='w-full py-2 bg-blue-600 text-white mt-3 rounded hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600'> Log Out </button>
                </div>
            </div>
        </div>
    )
}

export default Profile