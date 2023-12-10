// IMPORT LIBRARY
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// IMPORT TEMPLATE
import Auth from '../components/template/Auth'

// IMPORT ELEMENT
import Input from '../components/elements/Input'
import AlertMessage from '../components/elements/AlertMessage'

const Login = () => {

  // JIKA SUDAH PERNAH LOGIN, DAN BELUM LOG OUT, ATAU DATA LOGIN
  // SEBELUMNYA MASIH ADA, MAKA REDIRECT KE HALAMAN ADMIN
  useEffect(() => {
    const localStorageKey = 'Credentials'
    const credentials = JSON.parse(localStorage.getItem(localStorageKey))
    if (credentials) {
      navigate('/admin/dashboard')
    }
  })

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetMessages = () => {
    setError('');
    setSuccess('');
  };

  const Login =  async (e) => {
    try {
      e.preventDefault();
      resetMessages();

      const response = await axios.post("http://localhost:4000/api/users/login", {
        email       : email,
        password    : password
      });

      if (response) setSuccess(response.data.msg);

      const { data } = response.data;

      const userId = data.id;
      const userEmail = data.email;
      const userProfile = data.profile;
      
      const localStorageKey = 'Credentials'
      localStorage.setItem(localStorageKey, JSON.stringify({ 
        id : userId,
        email : userEmail,
        profile : userProfile
       }))


       setTimeout(() => { navigate('/admin/dashboard'); }, 2000);
    } catch (error) {
      setError(error.response.data.msg);
    }
  }

  return (
    <Auth name="Login" alternative="If you don't have an account ?" alternativeLink="/register" alternativeText="Sign Up" onSubmit={Login}>

      {error && <AlertMessage type="error" message={error} color="red" />}
      {success && <AlertMessage type="success" message={success} color="green" />}

      <Input type="email" name="Email" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" name="Password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
    </Auth>
  )
}

export default Login