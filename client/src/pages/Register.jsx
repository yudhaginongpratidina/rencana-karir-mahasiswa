import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Auth from '../components/template/Auth'
import Input from '../components/elements/Input'
import axios from 'axios'

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [re_password, setRePassword] = useState("")
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetMessages = () => {
    setError('');
    setSuccess('');
  };

  const Register = async (e) => {
    try {
      e.preventDefault();

      resetMessages();

      const response = await axios.post("http://localhost:4000/api/users", {
        name        : name,
        email       : email,
        password    : password,
        re_password : re_password
      });

      if (response) setSuccess(response.data.msg);
      setTimeout(() => { navigate('/login'); }, 1000);
      
    } catch (error) {
      setError(error.response.data.msg);
    }
  }

  return (
    <Auth name="Register" alternative="Already have an account?" alternativeLink="/login" alternativeText="Sign in" onSubmit={Register} >

      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}

      <Input type="text" name="Name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input type="email" name="Email" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" name="Password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Input type="password" name="Re-Password" placeholder="••••••••" value={re_password} onChange={(e) => setRePassword(e.target.value)} />

    </Auth>
  )

}

export default Register