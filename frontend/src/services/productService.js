import axios from 'axios';

export const getProducts = async (selectedCategory) => {
    try {
        return await axios.get("http://localhost:5000/api/products/?category=selectedCategory");
    } catch (error) {
        console.log(error);
        throw error;
    }
}

