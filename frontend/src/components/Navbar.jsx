import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const Navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        Navigate('/login');
    }

    return (
        <nav>
            <ul>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    )
}