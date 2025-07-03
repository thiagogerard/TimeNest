import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" 
          element={
            <PrivateRoute>
              <Navbar />
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route path="/profile" 
          element={
            <PrivateRoute>
              <Navbar />
              <Profile />
            </PrivateRoute>
          } 
        />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;