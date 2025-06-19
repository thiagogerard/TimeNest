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