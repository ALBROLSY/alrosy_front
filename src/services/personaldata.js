import api from "../api/api";


 export const prsonaldata={

getUser:async()=>{
    const res = await api.get('/getUser');
   return res.data;
},

}

