
import React from "react";
import homeimage from '@/assets/image/IMG-20260224-WA0007.jpg';
 export default function One(){
      
    return(

          <section  className="  pt-5 bg-black">
                <div className="w-100 h-100 pb-3  align-items-center ">
                  <div className="w-100 h-25  d-flex justify-content-center align-items-center img1 pt-5">
                    <img src={homeimage} loading="lazy" alt="" className="h-50 w-25  rounded-circle" />
                  </div>
                 <div className="text w-100 h-75  py-3 text-center ">
                        <div className="w-100 h-50">
                              <h1 className="display-3 text-white fw-bold  "> Cap/Omar Alrosy  </h1>
                        <p className="w-75 h-50 mt-4 mx-auto  text-white fs-4 fw-bold"
                        >
                           - bodybuilding trainer and nutritionist - <br/>
                      - sports rehabilitatation specialist - <br/>
                    - cupping massage specialist - </p>
                 </div>
                      <div className="w-100 h-110 border border-2 rounded-3  d-flex justify-content-center flex-wrap gap-4 pb-5">
                        <h1 className="w-100  text-white text-center pt-3 justify-content-center"> الشهادات و الكورسات</h1>
                        <iframe src="" 
                        frameborder="0" 
                        type="applicaton/pdf"
                         className="w-25 h-51 bg-white rounded-4 mb-"></iframe>
                        <iframe src="" frameborder="2" className="w-25 h-51 bg-white rounded-4 "></iframe>
                        <iframe src="" frameborder="2"className="w-25 h-51 bg-white rounded-4 "></iframe>
                        <iframe src="" frameborder="2"className="w-25 h-51 bg-white rounded-4 "></iframe>
                        <iframe src="" frameborder="2"className="w-25 h-51 bg-white rounded-4 "></iframe>
                        <iframe src="" frameborder="2"className="w-25 h-51 bg-white rounded-4 "></iframe>
                      </div>
                 </div>
                  
                </div>
                


          </section>
        
        
       
    )
}


