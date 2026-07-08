import { personaldata } from "../../../services/personaldata";
import { useState ,useEffect} from "react";
import {  useNavigate } from "react-router-dom";

export default function Personldata(){
       const[profile,setprofile]=useState({});
       const[file,setfile]=useState();
       const[loading,setloading]=useState(true);
       const[error,seterror]=useState(null);
      const navigate = useNavigate();
       useEffect(()=>{
          const fatchUserData = async()=>{
             const token = localStorage.getItem('token');
             console.log(token);


             if(!token){
                navigate('five/login');
                return;
             }
             try{
                const data = await personaldata.getUser();
              
                setprofile(data.User.profile);
                setfile(data.User.file);
             }catch(error){
                if(error.response?.status === 401){
                   localStorage.removeItem('token');
                   navigate('five/login');
                }else{
                   alert('فشل جلب البيانات الرجاء المعاوده فى وقت لاحق');
                  
                }      
             }
              finally {
                     setloading(false);
                }
        fatchUserData();  }
       },[navigate])
      //  useEffect(()=>{
      //        const data =  api.get('/getUser');
      //       localStorage.setItem('profile',data.User.profile) ;
      //       localStorage.setItem('file',data.User.file) ;
            
      //  },[])
    return(
       <section className="d-flex justify-content-center align-items-center pt-5 bg-black gap-4 ">
         <div className="w-75 h-100  mb-3 p-2 rounded-5 d-flex flex-wrap justify-content-center" >
            
            <div className="w-45 h-100 bg-form d-flex flex-wrap rounded-5 mt-5 continerLinks">
            <h1 className="  w-100  text-center text-white fw-bold pb-3 border-bottom ">بيانات المتدرب</h1>
                  <div className="w-45 h-100 p-1 d-flex justify-content-center personaltycard"><img src={profile?.profile_picture} loading="lazy" alt="الصوره بتاعتك مش وقتك دلوقتى "  className="w-75 h-102 rounded-4"/></div>
                  <div className="w-45 h-100 ps-4 personaltycard">
                             <p className="w-75  text-white">الاسم:{profile?.name} </p>
                             <p className="w-75  text-white">السن:{profile?.age} </p>
                             <p className="w-75   text-white">الطول:{profile?.height}  cm</p>
                             <p className="w-75  text-white ">الوزن: {profile?.weight} Kg</p>
                             <p className="w-75  text-white ">نوع الاشتراك:{profile?.following} </p>
                             <p className="w-75  text-white ">صلاحيه الباقه:{file?.activation} </p>
                             
                  </div>
                    
            </div>
            
            <div className=" w-45 h-100 bg- d-flex flex-wrap justify-content-center pt-2 bg-form  mt-3 rounded-5 continerLinks ">
               <h1 className=" w-100  text-center text-white fw-bold my-3 pb-3 border-bottom   ">جدول التدريب</h1>
                <iframe src={file?.pdf_src} frameBorder="0" className="w-75 h-102 bg-white rounded-4 mt-5"></iframe>
                <button className="w-50 rounded-5 bg-info text-white mb-4 mt-5" >Dwonload</button>
            </div>
         </div>
       </section>
    )
    
};

