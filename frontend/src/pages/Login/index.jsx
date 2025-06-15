import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Tentando logar com:', email, password);
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
  