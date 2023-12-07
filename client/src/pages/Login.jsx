import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Auth from '../components/template/Auth'
import Input from '../components/elements/Input'

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

       setTimeout(() => { navigate('/admin/dashboard'); }, 1000);
    } catch (error) {
      setError(error.response.data.msg);
    }
  }

  return (
    <Auth name="Login" alternative="If you don't have an account ?" alternativeLink="/register" alternativeText="Sign Up" onSubmit={Login}>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}

      <Input type="email" name="Email" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" name="Password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
    </Auth>
  )
}

export default Login