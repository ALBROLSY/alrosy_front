import { Link ,useNavigate} from "react-router-dom" 
 import { useAuth } from "../../../context/usercontext";
 import { useState } from "react"
 export default function Login() {
         const[email,setemail]=useState('');
         const[password,setpassword]=useState('');
         const[Error,setError]=useState('');
         const {login} = useAuth();
         const [loading,setloading]=useState(false);
         const navigate = useNavigate();
  const handelsubmit = async (e)=>{
               e.preventDefault();
               setError('') 
               setloading(true);
               
        const result =  await login({email,password});
               setloading(false);
                 if(result.success){
                    navigate('/Personaldata');
                 }else{
                    alert(result.error);
                 }
               };
           
    return(
    <section  className="d-flex bg-dark justify-content-center align-items-center flex-wrap ">
        <form  onSubmit={handelsubmit}  className="h-110 w-50 card1 rounded-5 p-2 bg-black ">
            <h1 className="text-center text-white fw-bold mx-5 py-2 border-bottom">تسجيل الدخول</h1>
            <label htmlFor="email"  className="w-100 py-1 text-capitalize mt-4 text-white">email</label>
            <input type="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} id="email"  className= "input-100 mb-1 text-dark"/>
            <label htmlFor="pass" className="w-100 py-1 text-capitalize mt-4 text-white">password</label>
            <input type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} id="pass"  className="input-100 py-2 border-bottom mb-4 text-dark"/>
            <p className="w-100 text-end px-3 border-bottom mb-4 pb-4 text-decoration-none text-primary"><Link to="forgetpass"  >هل نسيت الرقم السرى </Link></p>
            <input type="submit" value="ادخال"  className="input-100 bg-info text-capitalize text-primary mb-3"/>
        </form>
       
    </section>
    )

 };
  
    
