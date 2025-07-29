import axios from 'axios';
const API_URL = `${import.meta.env.VITE_API_URL}/report`;

export async function getWeeklyReport() {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/weekly`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data; 
}