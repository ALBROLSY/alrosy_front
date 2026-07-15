import { createContext,useContext,useEffect,useState } from "react";
import { authservices } from "../services/authservices";
const Authcontext = createContext(null);
export const Authprovider = ({children})=>{
    const [user,setuser]=useState(null);
    const [token,settoken]=useState(localStorage.getItem('token'));
    const [loading,setloading]=useState(true);
    useEffect(()=>{
        const initAuth =async()=>{
           if(token){
                     try{
                         const res = await authservices.getUser();
                       
                            
                            setuser(res.data);
                            console.log(res.data);
                            localStorage.setItem('user',JSON.stringify(res.data));
                     }catch(error){
                             localStorage.removeItem('token');
                             settoken(null);
                     }
                 }
                 setloading(false);
             };
       initAuth();
    
         },[token]);
 

const login = async(loginData)=>{
    try{
        const data = await authservices.login(loginData);
        
       
        localStorage.setItem('token',data.token);
           const userData= await authservices.getUser();
           setuser(userData);
          localStorage.setItem('user',JSON.stringify(userData.data));
        //   localStorage.setItem('data',userData.User);
        //   console.log('data',userData)
        return{ success: true , data:userdata.data};
        console.log(data.token);
       
    }catch(error){
        alert('الرجاء التاكد من الايميل او الباسورد');
    }

};
const register = async (userData)=>{
   try{
    const data = await authservices.register(userData);
        setuser(data.user);
        return{ success: true , data:data};
        alert('تم انشاء الحساب '+[user.user_name,user.email,user.phone,user.gender])
    }catch(error){
        alert('فشل انشاء الحساب');
    }
};
const logout = async()=>{
  try{
     await authservices.logout();
    
  } catch(error){
     console.log(error);
  } finally{
    settoken(null);
    setuser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};

return(
    <Authcontext.Provider value={{ user ,login ,loading,logout,register,token,isAuthenticated:!!token}}>
        {children}
    </Authcontext.Provider>
);

};
export const useAuth = ()=>{
    const context = useContext(Authcontext);
    return context;
}