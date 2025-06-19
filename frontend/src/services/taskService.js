import axios from 'axios';

const API_URL = 'http://localhost:5001/api/tasks'

export async function createTask(taskData) {
    const token = localStorage.getItem('token');

    const response = await axios.post(API_URL, taskData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function getTasks() {
    const token = localStorage.getItem('token');

    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function deleteTask(id) {
    const token = localStorage.getItem('token');

    const response = axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
}

export async function updateTask(id, data) {
    const token = localStorage.getItem('token');

    const response = await axios.put(`${API_URL}/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}