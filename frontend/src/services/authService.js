import axios from 'axios';

export const register = async (userData) => {
    try {
        await axios.post("http://localhost:5000/api/auth/signup", userData);
    }
    catch(error){
        console.log(error)
    }
    
}

// export const login = async (userData) => {
//     await axios.post("http://localhost:5000/api/auth/signin", userData)
// }