 
import Userform from "./userform" 
import { Link } from "react-router-dom"
 export default function Section2() {
    return(
  <section className="pt-5 bg-dark">
       

  <div className="w-100 h-100 d-flex flex-wrap gap-5 ">


           <div className=" w-100 h-110  d-flex  justify-content-evenly flex-wrap gap-2 pt-3 contanercard">
            <h1 className="w-100 text-center text-white mb-3">online coach</h1>
                <div className=" w-45 h-75 bg-secondary rounded-4  flex-wrap d-flex align-items-center text-white text-center  justify-content-center p-2 trainercard">
                    <h1 className="w-100 h-25 border-bottom border-white pt-4 text-uppercase fw-bold">standard</h1>
                    <h1 className="w-100 h-25 "> 1500 E.G</h1>
                    <p className="w-100 h-25">
                        1-شهر هديه + باقه الشهر<br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-متابعه يوم اسبوعيا<br/>
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill   " > اشتراك </button></Link> 
                </div>
                <div className="w-45 h-75 bg-primary rounded-4 flex-wrap d-flex align-items-center text-white text-center  justify-content-center p-2 trainercard">
                <h1 className="w-100 h-25 border-bottom border-white pt-4 text-uppercase fw-bold"> premium</h1>
                    <h1 className="w-100 h-25 ">2500 E.G</h1>
                    <p className="w-100 h-25">
                        1-شهر هديه+ باقه الشهرين<br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-متابعه يومين اسبوعيا
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill   " > اشتراك </button></Link> 
                </div>
                <div className="w-45 h-75 bg-warning rounded-4 flex-wrap d-flex align-items-center text-white text-center  justify-content-center p-2 trainercard">
                <h1 className="w-100 h-25 border-bottom border-white pt-4 text-uppercase fw-bold"> vip</h1>
                    <h1 className="w-100 h-25 ">3500 E.G</h1>
                    <p className="w-100 h-25">
                        1-ثلاثه اشهر تدريب<br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-متابعه ثلاثه ايام اسبوعيا<br/>
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill   " > اشتراك </button></Link> 
                </div>
                
            </div>
           <div className=" w-100 h-110  d-flex justify-content-evenly flex-wrap gap-2 py-2 contanercard "> 
             <h1 className="w-100 text-center text-white mb-3">private coach</h1>
                <div className="w-45 h-110 bg-secondary rounded-4 flex-wrap d-flex align-items-center text-white text-center  justify-content-center trainercard">
                <h1 className="w-100 h-25 border-bottom border-white pt-4 text-uppercase fw-bold"> standard</h1>
                    <h1 className="w-100 h-25 ">2000 E.G</h1>
                    <p className="w-100 h-25">
                        1-باقه الشهر<br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-متابعه كل اسبوع<br/>
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill   " > اشتراك </button></Link> 
                </div>
                <div className="w-45 h-110 bg-primary rounded-4 flex-wrap d-flex align-items-center text-white text-center  justify-content-center trainercard">
                <h1 className="w-100 h-25 border-bottom border-white pt-4 text-uppercase fw-bold">  premium</h1>
                    <h1 className="w-100 h-25 ">3000 E.G</h1>
                    <p className="w-100 h-25">
                        1-باقه الشهرين <br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-متابعه يومين اسبوعيا
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill   " > اشتراك </button></Link> 
                </div>
                <div className="w-45 h-110 bg-warning rounded-4 flex-wrap d-flex align-items-center text-white text-center  justify-content-center trainercard">
                <h1 className="w-100 h-25 border-bottom border-white pt-4 text-uppercase fw-bold"> vip</h1>
                    <h1 className="w-100 h-25 ">4000 E.G</h1>
                    <p className="w-100 h-25">
                         1-ثلاثه اشهر تدريب<br/>
                        2-نظام تمرين خاص<br/>
                        3-نظام دايت خاص<br/>
                        4-متابعه يوميه على مدار 24 ساعه من اسئله واستفسارات<br/>
                    </p>
                    <Link to={'/userform'}   className="text-decoration-none text-black w-100 p-3 rounded-pill" ><button className="w-75 p-3 rounded-pill   " > اشتراك </button></Link> 
                </div>
                
            </div>



</div>



        </section>
    )
};
