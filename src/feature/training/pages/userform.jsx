import { useState } from "react"






export default function Userform(params) {
            // const[data,setdata]=useState({
            //         name:'',
            //         age:'',
            //         height:'',
            //         weight:'',
            //         profile_picture:'',
            //         workout_system:'bulk',
            //         following:'online',
            //         subscription:'standard'
            // });
            // const userform = userApp();
            // const[error,seterror]=useState('');
            // const handlesubmit = async (e) => {
            //     e.preventDefault();
            //     seterror('');
            //     try{
            //         await userform(data);
            //         alert('تم اخال البيانات بنجاح');

            //     }catch(err){
            //         seterror(err.response?.data?.message||'اتاكد من بياناتك يا فورمه');
            //         console.log(error);
            //     }
            // }
    return(


        <section className="bg-black pt-5">
            <div className="container w-100 h-100  d-flex align-items-center justify-content-center ">
                <form  method="post" encType="application" className="w-50 h-600 bg-form border-3 border-white rounded-4 px-4 d-flex justify-content-center flex-wrap my-4 ">
                    <h1 className="text-white text-bolder text-center w-100 ">User Form</h1>
                        <input type="text" name="name"  className="w-100 rounded-2 py-2 my-2 " placeholder="  الاسم"/>
                        <input type="number" name="age"  className="w-100 rounded-2 py-2 my-2" placeholder="  السن"/>
                        <input type="number"name="height"   className="w-100 rounded-2 py-2 my-2" placeholder="  الطول"/>
                        <input type="text"name="weight"  className="w-100 rounded-2 py-2 my-2" placeholder="  الوزن(kg)"/>
                        <input type="file" name="profile_picture"   id=""accept="image/*" className="w-100 rounded-2 py-2 my-2" />
                        <select name="workout_system" id=""   className="w-100 rounded-2 py-1 my-2">
                            <option value="bulk">bulk</option>
                            <option value="cut">cut</option>
                        </select>
                        <select name="following" id=""  className="w-100 rounded-2 py-2 my-2">
                            <option value="online">اونلاين</option>
                            <option value="private">اوفلاين</option>
                        </select>
                        <select name="subscription" id=""   className="w-100 rounded-2 py-2 my-2">
                            <option value="standard">standard</option>
                            <option value="premium">premium</option>
                            <option value="vip">vip</option>
                            
                        </select>
                        <input type="submit" value="ارسال" className="w-75 rounded-5 py-2 my-2 " />
                    </form>
            </div>
           
        </section>

    )
};
