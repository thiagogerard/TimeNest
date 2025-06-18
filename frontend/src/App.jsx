import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'

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
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route path="/tasks" 
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          } 
        />
        <Route path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } 
        />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;