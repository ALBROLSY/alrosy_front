import axios from "axios";
const apiPublic = axios.create({
        baseURL:import.meta.env.VITE_API_URL,


        headers:{
            'Accept':'application/json',
            "Content-Type":'application/json'
        }
    });
export default apiPublic;