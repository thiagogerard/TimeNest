import { Navigate, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

export default function Dashboard() {
    const navigate = useNavigate();

    function handleLogout() {
      localStorage.removeItem('token');
      toast.success("You've successfully logged out!")
      navigate('/login');
    }

    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}></button>
      </div>
    )
}
  