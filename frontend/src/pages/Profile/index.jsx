// src/pages/Profile/index.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/timenest.png";

export default function Profile() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("username") || "";
    setUsername(stored);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-cream px-6 text-center relative overflow-hidden">
      {/* background blobs */}
      <div className="absolute -top-16 -left-16 w-40 h-40 bg-emerald-100 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-emerald-200 rounded-full blur-3xl" />

      {/* content */}
      <div className="z-10 flex flex-col items-center space-y-6">
        <img
          src={logo}
          alt="TimeNest logo"
          className="w-16 h-16 drop-shadow-md"
        />
        <h1 className="text-2xl font-bold text-emerald-600">Your Profile</h1>

        <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-4 text-left">
          <p className="text-gray-700">
            <span className="font-medium">Username:</span> {username}
          </p>
          <button
            onClick={handleLogout}
            className="w-full py-2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
