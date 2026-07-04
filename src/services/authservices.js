import apiPublic from "../api/apipublic";
import api from "../api/api";
export const authservices ={

register:async(userData)=>{
    const res = await apiPublic.post('/register',userData);
    return res.data;
},
login:async(loginData)=>{
    const res = await apiPublic.post('/login',loginData);
    return res.data;
},
logout:async()=>{
    const res = apiPublic.post('/logout');
    return res.data.message;
},

getUser:async()=>{
    const res = api.get('/getUser');
    return res.data;
}










}