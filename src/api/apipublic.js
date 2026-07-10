import axios from "axios";
const apiPublic = axios.create({
        baseURL:'https://alrosybackend-production.up.railway.app/api',
        


        headers:{
            'Accept':'application/json',
            "Content-Type":'application/json'
        }
    });
export default apiPublic;