import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export async function loginUser(email, password) {
    const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
    });

    return response.data;
}

export async function registerUser(name, email, password) {
    const response = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
    })

    return response.data;
}