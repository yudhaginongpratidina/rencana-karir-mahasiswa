// IMPORT LIBRARY
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// IMPORT ELEMENT
import Input from './elements/Input'
import Button from './elements/Button'
import AlertMessage from './elements/AlertMessage'

const Profile = () => {

    const navigate = useNavigate();

    const [image, setImage] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [re_Password, setRePassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const localStorageKey = 'Credentials'
    const credentials = JSON.parse(localStorage.getItem(localStorageKey))

    const resetErrors = () => {
        setError('')
        setSuccess('')
    }

    const getProfile = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/users/${credentials?.id}`)
            const { data } = response.data
            setImage(data.profile)
            setFullName(data.name)
            setEmail(data.email)
        }catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getProfile();
    },[])


    const Update = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.patch(`http://localhost:4000/api/users/${credentials?.id}`, {
                name        : fullName,
                password    : password,
                re_password : re_Password
            })

            if (response) {
                resetErrors();
                setSuccess(response.data.msg)
                setTimeout(() => { navigate('/admin/profile') }, 2000);
            }

        } catch (error) {
            setError(error.response.data.msg)
        }
    }

    const Delete = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/users/${credentials?.id}`)
            if (response) {
                resetErrors();
                setSuccess(response.data.msg)
                localStorage.removeItem('Credentials')
                setTimeout(() => { navigate('/login') }, 2000);
            }
        } catch (error) {
            setError(error.response.data.msg)
        }
    }

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


                <form>
                    {error && <AlertMessage type="error" message={error} color="red" />}
                    {success && <AlertMessage type="success" message={success} color="green" />}

                    <Input type="text" name="Full Name" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <Input type="email" name="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" name="Password" placeholder="****" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Input type="password" name="Re-Password" placeholder="*****" value={re_Password} onChange={(e) => setRePassword(e.target.value)} />

                    <div className='grid grid-cols-3 gap-x-2 mt-2'>
                        <Button name="Update" onClick={Update}/>
                        <Button name="Delete" onClick={Delete}/>
                        <Button name="Log Out" onClick={LogOut}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile