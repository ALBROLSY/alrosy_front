
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@/assets/image/IMG-20260120-WA0007.jpg';

export default function Nav(){
     const navigate = useNavigate();
     const handelchange = (e)=>{
      navigate(e.target.value);
     }
      return(
           
                 <nav>
                        <div className='w-25 h-100 d-flex align-items-center p-1 gap-1'>
                              <img src={logo} alt='' className='w-25 h-100 rounded-circle' />
                              <h1 className='w-75 h-25 text-black fw-bolder pb-5 '>Alrosy</h1>
                              
                        
                        </div> {/**logo */}
                        <div className=' w-50 h-100  d-flex  justify-content-center align-items-center  '  >
                           
                                <ul className=' w-50 h-100  d-flex  justify-content-evenly    align-items-center navlink '   >
                                      <li  ><Link to={'/'} className='text-decoration-none text-black fw-bolder fs-5  navlink'>رئيسيه</Link>  </li>
                                      <li > <Link to={'two'}className='text-decoration-none text-black fw-bolder  fs-5 navlink' >تدريب </Link> </li>
                                      <li > <Link to={'three'}className='text-decoration-none text-black fw-bolder fs-5  navlink' > حجامه</Link> </li>
                                     {/* <li > <Link to={'four'}className='text-decoration-none text-black fw-bolder navlink '>استوديو</Link> </li> */}
                                      <li > <Link to={'five'}className='text-decoration-none text-black fw-bolder fs-5 navlink'> انشاء حساب</Link> </li>
                                      <li > <Link to={'personaldata'} className='text-decoration-none text-black fw-bolder fs-5  navlink ' >شخصى</Link></li>

                                </ul>
                              <select name="" className='  rounded-3 bg-prmium fw-bolder h-75 text-center' id="minu" onChange={handelchange}>
                                    <option value='/'>رئيسيه</option>
                                    <option value='two'>تدريب </option>
                                    <option value='three'>  حجامه</option>
                                    <option value='five'> انشاء حساب</option>
                                    <option value='personaldata'>شخصى</option>
                           </select>

                               
                        </div>
                        

                             



                       
                         
                 </nav>
                 
       



      )



}