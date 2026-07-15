 
import Userform from "./userform" 
import { Link } from "react-router-dom"
 export default function Section2() {
    return(
  <section className="pt-5 ">
       

  <div className="w-100 h-100 d-flex flex-wrap gap-5 ">


           <div className=" w-100 h-110  d-flex  justify-content-evenly flex-wrap gap-2 pt-3 contanercard">
            <h1 className="w-100 text-center text-white  mt-4">online coach</h1>
                <div className=" w-45 h-75 border border-danger border-5 rounded-4  flex-wrap d-flex align-items-center text-white text-center  justify-content-center p-2 trainercard">
                    <h1 className="w-100 h-25 border-bottom border-white pt-4 text-uppercase  bg-secondary fw-bold">standard</h1>
                    <h1 className="w-100 h-25 "> 1000 E.G</h1>
                    <p className="w-100 h-25">
                        1-باقه الشهر<br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-متابعه يوم اسبوعيا<br/>
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill fs-4 fw-bolder bg-dange  " > اشتراك </button></Link> 
                </div>
                <div className="w-45 h-75   border border-danger border-5 rounded-4 flex-wrap d-flex align-items-center text-white text-center  justify-content-center p-2 trainercard">
                <h1 className="w-100 h-25 border-bottom bg-primary border-white pt-4 text-uppercase fw-bold"> premium</h1>
                    <h1 className="w-100 h-25 ">2000 E.G</h1>
                    <p className="w-100 h-25">
                        1-باقه الشهرين<br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-متابعه يومين اسبوعيا
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill fs-4 fw-bolder bg-dange   " > اشتراك </button></Link> 
                </div>
                <div className="w-45 h-75   border border-danger border-5 rounded-4 flex-wrap d-flex align-items-center text-white text-center  justify-content-center p-2 trainercard">
                  <h1 className="w-100 h-25  bg-warning border-bottom border-white rounded-3 pt-4 text-uppercase fw-bold"> vip</h1>
                    <h1 className="w-100 h-25 ">3000 E.G</h1>
                    <p className="w-100 h-25">
                        1-ثلاثه اشهر تدريب<br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-متابعه اسبوعيا<br/>
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill fs-4 fw-bolder bg-dange   " > اشتراك </button></Link> 
                </div>
                
            </div>
           <div className=" w-100 h-110  d-flex justify-content-evenly flex-wrap gap-2 py-2 contanercard "> 
             <h1 className="w-100 text-center text-white mb-3">private coach</h1>
              <div className="w-45 h-110  border border-danger border-5 rounded-4 flex-wrap d-flex align-items-center text-white text-center p-2 justify-content-center trainercard">
                <h1 className="w-100 h-25  bg-secondary border-bottom  rounded-4 border-white pt-4 text-uppercase fw-bold"> standard</h1>
                    <h1 className="w-100 h-25 ">2000 E.G</h1>
                    <p className="w-100 h-25">
                        1-باقه الشهر<br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-الرد على الاسئله والاستفسارات الهامه فى معاد محددة<br/>
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill  fs-4 fw-bolder bg-dange  " > اشتراك </button></Link> 
                </div>
              <div className="w-45 h-110   border border-danger border-5 rounded-4 flex-wrap d-flex align-items-center text-white text-center p-2 justify-content-center trainercard">
                <h1 className="w-100 h-25 bg-primary border-bottom  rounded-4 border-white pt-4 text-uppercase fw-bold">  premium</h1>
                    <h1 className="w-100 h-25 ">3000 E.G</h1>
                    <p className="w-100 h-25">
                        1-باقه الشهرين <br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-الرد على الاسئله والاستفسارات الهامه فى معاد محددة
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill  fs-4 fw-bolder bg-dange " > اشتراك </button></Link> 
                </div>
              <div className="w-45 h-110  border border-danger border-5 rounded-4 flex-wrap d-flex align-items-center text-white text-center p-2  justify-content-center trainercard">
                <h1 className="w-100 h-25 bg-warning border-bottom  rounded-4 border-white pt-4 text-uppercase fw-bold"> vip</h1>
                    <h1 className="w-100 h-25 ">4000 E.G</h1>
                    <p className="w-100 h-25">
                         1-ثلاثه اشهر تدريب<br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-متابعه يوميه على مدار 24 ساعه من اسئله واستفسارات<br/>
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill fs-4 fw-bolder bg-dange  " > اشتراك </button></Link> 
                </div>
                
            </div>



</div>



        </section>
    )
};
