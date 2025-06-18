import axios from 'axios';

const API_URL = 'http://localhost:5001/api/tasks'

export async function getTasks() {
    const token = localStorage.getItem('token');

    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}