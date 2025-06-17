import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/authService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('Trying to login with:', email, password);

        try {
            const data = await loginUser(email, password);
            console.log('Answer from backend', data);
            localStorage.setItem('token', data.token);
            navigate('./dashboard');
        } catch (err) {
            console.error('Login error', err);
            alert('Invalid Login')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='email'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button type='submit'>Login</button>
        </form>
    )
}
  