import axios from 'axios';

export const register = (userData) => {
    axios.post("http://localhost:5000/api/auth/signup", userData)
}

export const login = (userData) => {
    axios.post("http://localhost:5000/api/auth/signin", userData)
}