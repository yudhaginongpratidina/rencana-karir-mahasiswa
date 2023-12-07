import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Auth from '../components/template/Auth'
import Input from '../components/elements/Input'

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetMessages = () => {
    setError('');
    setSuccess('');
  };

  const Login = (e) => {
    try {
      e.preventDefault();
      resetMessages();

      if (!email || !password) {
        return setError("All fields are required");
      }

      if (email !== "admin@admin" || password !== "kesehatan") {
        return setError("Wrong email or password");
      }

      setSuccess("Login successful");
      
    } catch (error) {
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