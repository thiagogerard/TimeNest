import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/authService';
import logo from '../../assets/timenest.png'

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
            localStorage.setItem('username', data.user.name);
            localStorage.setItem('dailyEnergy', data.user.dailyEnergy);
            navigate('/dashboard');
        } catch (err) {
            console.error('Login error', err);
            alert('Invalid Login')
        }
    }

    return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cream px-6 overflow-hidden">
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-emerald-100 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-emerald-200 rounded-full blur-3xl"></div>
      <img src={logo} alt="TimeNest logo" className="w-20 h-20 mb-4 drop-shadow" />
      <h1 className="text-2xl font-bold text-emerald-600 mb-8">Welcome back!</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-4"
      >
        <label className="block text-gray-700 text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="you@example.com"
          required
        />

        <label className="block text-gray-700 text-sm font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          placeholder="••••••••"
          required
        />

        <button
          type="submit"
          className="w-full mt-4 py-2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
        >
          Log in
        </button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-emerald-600 font-medium underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </form>
      <footer className="pt-24 text-center text-black text-1xs">
        © 2025 TimeNest
      </footer>
    </main>
    )
}
  