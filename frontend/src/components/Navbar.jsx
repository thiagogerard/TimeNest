import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '../assets/timenest.png' 

export default function Navbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [energy, setEnergy] = useState(
    Number(localStorage.getItem("dailyEnergy")) || 0
  );
  const [totalEnergy, setTotalEnergy] = useState(
    Number(localStorage.getItem("dailyEnergyTotal")) || 100
  );

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('dailyEnergy')
    navigate('/login')
  }

  useEffect(() => {
    const e = Number(localStorage.getItem('dailyEnergy')) || 0;
    const total = Number(localStorage.getItem('dailyEnergyTotal')) || 100;
    setEnergy(e);
    setTotalEnergy(total);
  }, [])

  useEffect(() => {
    function onEnergyChange(e) {
      setEnergy(e.detail);
      setTotalEnergy(
        Number(localStorage.getItem("dailyEnergyTotal")) || totalEnergy
      );
    }

    window.addEventListener('energyChange', onEnergyChange);
    return () => {
      window.removeEventListener('energyChange', onEnergyChange);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-30 bg-white shadow-md flex items-center justify-between px-4 py-3 md:shadow-none">
      
      <Link to="/dashboard" className="flex items-center space-x-2">
        <img src={logo} alt="TimeNest" className="w-8 h-8" />
        <span className="text-lg font-semibold text-emerald-600">TimeNest</span>
      </Link>

      <div className="hidden md:block text-sm text-gray-700">
        ⚡ Energy: <span className="font-medium">{energy}/{totalEnergy}</span>
      </div>

      <button
        className="md:hidden text-2xl text-emerald-600"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      <ul className="hidden md:flex md:space-x-6">
        <li>
          <Link to="/dashboard" className="text-gray-700 hover:text-emerald-600">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile" className="text-gray-700 hover:text-emerald-600">
            Profile
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="text-gray-700 hover:text-emerald-600"
          >
            Logout
          </button>
        </li>
      </ul>

      {isOpen && (
        <div className="fixed inset-0 z-20 flex">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white w-3/4 max-w-xs h-full shadow-lg p-6">
            <button
              className="absolute top-4 right-4 text-xl text-gray-600"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>

            <ul className="mt-12 space-y-6">
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-800 hover:text-emerald-600"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-800 hover:text-emerald-600"
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    handleLogout()
                  }}
                  className="block text-lg font-medium text-gray-800 hover:text-emerald-600"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}