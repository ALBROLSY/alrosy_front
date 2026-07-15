
import { useAuth } from "../../../context/usercontext";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Personldata(){
      //  const{user,loading}=useAuth();
      // const navigate = useNavigate();
      // useEffect(()=>{
      //       if(!loading && !user)return alert('loading....');
      //  if(!user){
      //    navigate('five/login');
      //    return ;
      //  }
        

      // },[user,loading,navigate])
    
        
      //       const profileData = user.profile;
       
      //       const file = user.file;
      
      
     
    return(
       <section className=" w-100 d-flex justify-content-center align-items-center pt-5 bg-black gap-4 ">
         <div className="w-75 h-100  mb-3 p-2 rounded-5 d-flex flex-wrap justify-content-center" >
            
            <div className="w-45 h-100 bg-form d-flex flex-wrap rounded-5 mt-5 continerLinks">
            <h1 className="  w-100  text-center text-white fw-bold pb-3 border-bottom ">بيانات المتدرب</h1>
                  <div className="w-45 h-100 p-1 d-flex justify-content-center personaltycard"><img src={''} loading="lazy" alt="الصوره بتاعتك مش وقتك دلوقتى "  className="w-75 h-102 rounded-4"/></div>
                  <div className="w-45 h-100 ps-4 personaltycard">
                             <p className="w-75  text-white">الاسم:{} </p>
                             <p className="w-75  text-white">السن:{} </p>
                             <p className="w-75   text-white">الطول:{}  cm</p>
                             <p className="w-75  text-white ">الوزن: {} Kg</p>
                             <p className="w-75  text-white ">نوع الاشتراك:{} </p>
                             <p className="w-75  text-white ">صلاحيه الباقه:{} </p>
                             
                             
                  </div>
                    
            </div>
            
            <div className=" w-45 h-100 bg- d-flex flex-wrap justify-content-center pt-2 bg-form  mt-3 rounded-5 continerLinks ">
               <h1 className=" w-100  text-center text-white fw-bold my-3 pb-3 border-bottom   ">جدول التدريب</h1>
                <iframe src='' frameBorder="0" className="w-75 h-102 bg-white rounded-4 mt-3 mb-3"></iframe>
                
            </div>
         </div>
       </section>
    )
    
};

