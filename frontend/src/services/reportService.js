import axios from 'axios';
const API_URL = 'http://localhost:5001/api/report';

export async function getWeeklyReport() {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/weekly`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data; 
}