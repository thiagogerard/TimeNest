import { useState } from "react";
import { useNavigate } from 'react-router-dom' ;
import { registerUser } from "../../services/authService"; 
import logo from "../../assets/timenest.png"

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
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-cream px-6 text-center relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-emerald-100 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-emerald-200 rounded-full blur-3xl"></div>

      <div className="flex items-center space-x-2 mb-8 z-10">
        <img src={logo} alt="TimeNest logo" className="w-16 h-16 drop-shadow-md" />
        <h1 className="text-2xl font-bold text-emerald-600">TimeNest</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg z-10"
      >
        <h2 className="text-xl font-semibold text-emerald-600 mb-4">
          Create an account
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-emerald-600 underline cursor-pointer"
          >
            Log in
          </span>
        </p>
      </form>
      <footer className="pt-24 text-center text-black text-1xs">
        © 2025 TimeNest
      </footer>
    </main>
  )
}