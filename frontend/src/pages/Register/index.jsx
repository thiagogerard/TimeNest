import { useState } from "react";
import { useNavigate } from 'react-router-dom' ;
import { registerUser } from "../../services/authService"; 

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      const data = await registerUser(name, email, password);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error('Register error', err);
      alert('Error creating account. Try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  )
}