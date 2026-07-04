 import { Link } from "react-router-dom"
 
 export default function Footer(){
    return(
        <>
            <footer >
                <div className="  w-100 h-75 d-flex flex-wrap justify-content-center   ">
                  <div className="w-50 h-25   d-flex justify-content-center"><img src="src/assets/image/IMG-20260120-WA0006.jpg" alt="" className="h-100 w-25 rounded-circle" /></div>
                  <div className="w-100 h-75 d-flex  gap-3 justify-content-center align-items-center"> 
                   <div className="w-25 h-100 d-flex flex-wrap justify-content-center ">
                    <h4 className="w-75">cap/omar alrosy</h4>
                    <h6 className="w-75">omerAlrosy@gmail.com</h6>
                    <span className="w-75"> <img src="src/assets/icone/location-dot-solid-full.svg" alt=""  className="img1 me-2" /><Link to='/location' className="text-decoration-none text-black fw-bolder ">location</Link></span>
                    <span className="w-75" > <img src="src/assets/icone/phone-solid-full.svg" alt=""  className="img1 me-2" />01090540191</span> 
                   </div>
                    
                    <div className="w-75 h-100  d-flex justify-content-evenly align-items-center">
                    <Link to={'five/login'} className="text-decoration-none text-black fw-bolder" >تسجيل دخول</Link>
                    <Link to={'Userform'} className="text-decoration-none text-black fw-bolder">تسجيل بيانات</Link>
                    <Link to={'Personaldata'} className="text-decoration-none text-black fw-bolder">الملف الشخصى </Link>
                    <Link className="text-decoration-none text-black fw-bolder">الاستفسارات </Link>
                    <Link className="text-decoration-none text-black fw-bolder">العروض والتخفيضات </Link>
                  </div></div>
                 
                
                
                
                
                 {/* 
                   <span className="w-100" > <img src="src/assets/phone-solid-full.svg" alt=""  className="img1 me-2" />01027862821</span>  
                   <span> <img src="src/assets/location-dot-solid-full.svg" alt=""  className="img1 me-2" /><Link to='/location' className="text-decoration-none text-black fw-bolder ">location</Link></span>               
                   <span> <img src="src/assets/location-dot-solid-full.svg" alt=""  className="img1 me-2" /><Link to='/location' className="text-decoration-none text-black fw-bolder ">location</Link></span> 
                     */}
                    
                    </div>    {/*num div*/}
                <div className="    w-100 h-25 border-top border-black d-flex justify-content-center ">
                    
                    <div className="   w-50 h-100 icon d-flex align-items-center justify-content-evenly ">
                        <a href="https://www.facebook.com/share/1C3u9c55yM/"><img src="src/assets/icone/facebook-brands-solid-full.svg" alt="" className="img1" /></a>
                        <a href=" https://wa.me/qr/D6CAN2ITDQA5K1"><img src="src/assets/icone/square-whatsapp-brands-solid-full.svg" alt="" className="img1" /></a>
                        <a href=""><img src="src/assets/icone/square-instagram-brands-solid-full.svg" alt="" className="img1" /></a>
                        <a href="https://www.tiktok.com/@al.rosy1?_r=1&_t=ZS-93EbVKVECdo"><img src="src/assets/icone/tiktok-brands-solid-full.svg" alt="" className="img1" /></a>
                    </div>
                    
                    
                </div> {/*icon div*/}
            </footer>
        </>
    )
}