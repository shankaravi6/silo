import baseURL from "../API/baseURL";
import axios from 'axios';


export const makeApiCall = async (path, method, data = {}) => {
    try {
        const response = await axios[method.toLowerCase()](`${baseURL+path}`, method.toLowerCase() === 'get' ? { params: data } : data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}