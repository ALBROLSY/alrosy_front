
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/image/IMG-20260120-WA0007.jpg';
export default function Nav(){
     

      return(
           
                 <nav>
                        <div className='w-25 h-100 d-flex align-items-center p-1 gap-1'>
                              <img src={logo} alt='' className='w-25 h-100 rounded-circle' />
                              <h1 className='w-75 h-25 text-black fw-bolder pb-5'>Alrosy</h1>
                              
                        
                        </div> {/**logo */}
                        <div className=' w-50 h-100 ps-5'>
                           
                                <ul className='    d-flex  justify-content-evenly pt-2 me-4 '>
                                      <li  ><Link to={'/'} className='text-decoration-none text-black fw-bolder '>رئيسيه</Link>  </li>
                                      <li > <Link to={'two'}className='text-decoration-none text-black fw-bolder '>تدريب </Link> </li>
                                      <li > <Link to={'three'}className='text-decoration-none text-black fw-bolder '> حجامه</Link> </li>
                                     {/* <li > <Link to={'four'}className='text-decoration-none text-black fw-bolder '>استوديو</Link> </li> */}
                                      <li > <Link to={'five'}className='text-decoration-none text-black fw-bolder '> انشاء حساب</Link> </li>
                                      <li > <Link to={'personaldata'} className='text-decoration-none text-black fw-bolder ' >شخصى</Link></li>

                                </ul>
                            
                        </div>

                 </nav>
                 
       



      )



}