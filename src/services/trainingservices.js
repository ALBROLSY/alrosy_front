import api from "../api/api";
const trainerservices = {
    userform:async(Form)=>{
        console.log(1);
        const formData = new FormData();
        for(let key in Form){
            formData.append(key,Form[key]);
        }
        const res = await api.post('Profile/cr',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        
        return res.data;

    }
};
export default trainerservices;