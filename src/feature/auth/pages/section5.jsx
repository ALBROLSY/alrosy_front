import { Link } from "react-router-dom"
import { useState } from "react"

import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/usercontext";


export default function Section5() {
const[form,setform] = useState({
        user_name:'',
        email:'',
        password:'',
        password_confirmation:'',
        phone:'',
        gender:'male',
        role:'user'
        
    });
    const[loading,setloading]=useState(false);
    const[error,seterror]=useState();
    const{register}=useAuth();
    const navigate = useNavigate();
    const handleChange =(e)=>{
        setform({...form,[e.target.name]:e.target.value});
    }
    const handelsubmit= async (e)=> {
            e.preventDefault();
            seterror('');
            setloading(true);
            
                
         const result =  await register(form);
              setloading(false);
              if(result?.success){
                alert('قم بتسجيل الدخول اولا ومن ثم الاشتراك');
                    navigate('/login');
              }else{
                alert('الرجاء التاكد من البايانات المدخله');
                seterror(result.message);
              }
                
                
            
    };
    return(
        <section className="d-flex bg-black justify-content-center align-items-center pt-3  ">
            <div className="w-100 h-100 d-flex justify-content-center pt-5 flex-wrap ">
                <form onSubmit={handelsubmit} method="post" className="w-75 h-100 card1 px-4   bg-form rounded-5  ">
                    <h1 className="text-center text-white fw-bold mx-5 py-1 border-bottom ">انشاء حساب</h1>
                        <label htmlFor="name" className="w-100 py-1 text-capitalize text-white my-2" >user name</label>
                        <input type="text" name="user_name" value={form.user_name} onChange={handleChange} required id="name" className="input-100" />
                        <label htmlFor="email"className="w-100 py-1 text-capitalize text-white my-2">email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required id="email" className="input-100"/>
                        <label htmlFor="pass"className="w-100 py-1 text-capitalize text-white my-2">password</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange} required id="pass"className="input-100" />
                        <label htmlFor="pass"className="w-100 py-1 text-capitalize text-white my-2">confirmed</label>
                        <input type="password" name="password_confirmation" value={form.password_confirmation} onChange={handleChange} required id="pass"className="input-100" />
                        <label htmlFor="phone"className="w-100 py-1 text-capitalize text-white my-2">phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required id="phone"className="input-100" />
                        <label htmlFor="gender"className="w-100 py-1 text-capitalize text-white my-2">gender</label>
                        <select name="gender" value={form.gender} onChange={handleChange} required id="gender"className="input-100 text-dark">
                            <option value="male" className=" text-black">male</option>
                            <option value="female" className=" text-black">female</option>
                        </select>
                        <p className="w-100 text-center pt-2 border-bottom mb-4 pb-2 text-white my-2">فى حاله تسجيل الدخول <Link to={'login'}>اضغط هنا</Link></p>
                        <button type="submit" className="input-100 bg-info text-capitalize  text-primary  mb-3">ok</button>
                </form>
                <div className="w-100 h-75 px-4 mt-3">
                    <h1 className="w-100  fw-bolder text-center mb-4 text-white">خطوات التسجيل والتحذيرات</h1>
                    <p className="text-white ">1- الرجاء ادخال الاسم كامل وموافق لنفس<Link to={'/userform'}>الاسم فى تسجيل الاشتراك</Link></p>
                    <p className="text-white">2-ادخال ايميل صحيح</p>
                    <p className="text-white">3-الباسورد يتكون من سته ارقام على الاقل </p>
                    <p className="text-white">4-لالتاكد من رقم الهاتف انه صالح وصحيح</p>
                    <p className="text-white">5-فى حاله ادخال او ارسال بيانات بشكل خاطئ يرجى التواصل مع المدرب</p>
                </div>
            </div>
        </section>
    )
};
