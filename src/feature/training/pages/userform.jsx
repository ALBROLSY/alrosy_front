import { useState } from "react"
import trainerservices from "../../../services/trainingservices";




export default function Userform() {
            const[Form,setForm]=useState({
                    name:'',
                    age:'',
                    height:'',
                    weight:'',
                    profile_picture:null,
                    workout_system:'bulk',
                    following:'online',
                    subscription:'standard'
            });
        
            const[error,seterror]=useState('');
            const handelchange = (e)=>{
                const{name,value,files,type}=e.target;
                setForm({...Form,[name]:type==='file'?files[0]:value});
                
            };
            const handlesubmit = async (e) => {
                e.preventDefault();
                seterror('');
                try{
                   
                    await trainerservices.userform(Form);
                    alert('تم تسجيل  البيانات  بنجاح');
                   
                    
                }catch(err){
                    alert('الرجاء التاكد من البيانات الخاصه بك ');
                    
                }
            };
             
    return(


        <section className="bg-black pt-5">
            <div className="container w-100 h-100  d-flex align-items-center justify-content-center flex-wrap ">
             <h1 className="text-white text-bolder text-center w-100  mt-3">User Form</h1>
                <form onSubmit={handlesubmit}  encType="multipart/form-data" className="w-45 h-600 bg-form border-3 border-white rounded-4 px-4 d-flex justify-content-center flex-wrap my-4 pt-3 userform">
                <h1 className="text-center text-white fw-bold mx-5 py-1 border-bottom ">تسجيل اشتراك</h1>
                        <input type="text" name="name"  onChange={handelchange} className="w-100 rounded-2 py-2 my-2 " placeholder="  الاسم"/>
                        <input type="number" name="age"  onChange={handelchange} className="w-100 rounded-2 py-2 my-2" placeholder="  السن"/>
                        <input type="number"name="height"  onChange={handelchange} className="w-100 rounded-2 py-2 my-2" placeholder="  الطول"/>
                        <input type="text"name="weight"  onChange={handelchange} className="w-100 rounded-2 py-2 my-2" placeholder="  الوزن(kg)"/>
                        <input type="file" name="profile_picture"  onChange={handelchange} id=""accept="image/*" className="w-100 rounded-2 py-2 my-2" />
                        <select name="workout_system" id="" onChange={handelchange} className="w-100 rounded-2 py-1 my-2">
                            <option value="bulk">bulk</option>
                            <option value="cut">cut</option>
                        </select>
                        <select name="following" id=""  onChange={handelchange} className="w-100 rounded-2 py-2 my-2">
                            <option value="online">اونلاين</option>
                            <option value="private">اوفلاين</option>
                        </select>
                        <select name="subscription" id=""  onChange={handelchange}  className="w-100 rounded-2 py-2 my-2">
                            <option value="standard">standard</option>
                            <option value="premium">premium</option>
                            <option value="vip">vip</option>
                            
                        </select>
                        <input type="submit" value="ارسال" className="w-75 rounded-5 py-2 my-2 " />
                    </form>
            </div>

           <h2 className="text-danger">الرجاء التاكد من البيانات المدخله صحيحه-1</h2>
           <h2 className="text-danger">الرجاء التاكد ان حجم الصوره المرفوعه لاتتعدى 2 ميجابايت -2</h2>
        </section>

    )
};
