import apiPublic from "../api/apipublic";
export const HihamaServices = {
    hijama:async(hejama)=>{
        console.log(hejama);
        const res = await apiPublic.post('/hejama',hejama);
        return res.data;
    }
}