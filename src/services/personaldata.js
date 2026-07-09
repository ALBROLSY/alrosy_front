import api from "../api/api";


 export const personaldata={

            getUser:async()=>{
            const res = await api.get('/getUser');
            return res.data;
            },

}

