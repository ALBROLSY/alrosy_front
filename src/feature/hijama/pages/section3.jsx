import { useEffect,useState } from "react"
import axios from "axios"
export default function Section3() {
//  const[massage ,setmassage]=useState; 
  
  
  
    // useEffect(()=>{
    //   axios.get('http://127.0.0.1:8000/api/hejama')
    //   .then(response=>{
    //    setmassage(response.massage)
    //   })     
    // },[])
                    
    return(
        
        <section className="bg-dark">

           <div className="w-100 h-100  ">
                <div className="w-100 h-75 bg-1nfo d-flex justify-content-center flex-wrap gap-3 pt-3 ">
                    <h1 className="w-100 text-white mt-5 fw-bolder text-center pt-2">قسم الطب التكميلى </h1>
                    <div className="  rounded-4  mt-3 card1 p-2 " >
                        <img src="src/assets/image/images.jpeg" alt="" className="w-100 h-50 rounded-4" />
                        <div className="w-100 h-50">
                        <h1 className="fw-bold  fs-3 text-center w-100 ">الحجامه </h1>
                                        <p className=" text-center w-100 h-75 "> تقنية علاجية تقليدية تعتمد على استخدام كؤوس لشفط الجلد وتنشيط الدورة الدموية.
                تُستخدم للتخلص من السموم وتحفيز تدفق الدم في الجسم.
                تساعد في تخفيف الألم وتحسين الصحة العامة والاسترخاء.</p>
                                    </div>
                    </div>
                    <div className="  rounded-4 mt-3  card1 p-2  " >
                        <img src="src/assets/image/Capture2.PNG" alt="" className="w-100 h-50 rounded-4" />

                        <div className="w-100 h-50">
                        <h1 className="fw-bold  fs-3 text-center  w-100 ">الابر الصينيه</h1>
                        <p className=" text-center  w-100 h-75 ">علاج صيني قديم يعتمد على إدخال إبر دقيقة في نقاط محددة بالجسم.
يهدف إلى تنظيم تدفق الطاقة وتحفيز الجهاز العصبي.
يُستخدم لتخفيف الألم وعلاج التوتر والعديد من الحالات الصحية.</p>
                        </div>
                    </div>
                    <div className="   rounded-4  mt-3 card1 p-2  " >
                        <img src="src/assets/image/Capture.PNG" alt="" className="w-100 h-50 rounded-4" />
                        <div className="w-100 h-50">
                        <h1 className="fw-bold  fs-3 text-center  w-100 ">المساج</h1>
                        <p className=" text-center  w-100 h-75 "> أسلوب علاجي يعتمد على تدليك العضلات والأنسجة لتحسين الدورة الدموية.
يساعد في تقليل التوتر والإجهاد وتحسين مرونة الجسم.
يمنح شعورًا بالاسترخاء ويخفف من آلام العضلات. </p>
                        </div>
                    </div>
                     <div className="   rounded-4  mt-3 card1 p-2  " >
                        <img src="src/assets/image/Capture3.PNG" alt="" className="w-100 h-50 rounded-4" />
                        <div className="w-100 h-50">
                        <h1 className="fw-bold  fs-3 text-center  w-100 ">كيرو براكتيك(طرقعه)</h1>
                        <p className=" text-center  w-100 h-75 "> علاج يركز على تعديل وضع الفقرات والمفاصل خاصة العمود الفقري.
يهدف إلى تحسين توازن الجسم ووظائف الجهاز العصبي.
يساعد في تخفيف آلام الظهر والرقبة وتحسين الحركة. </p>
                        </div>
                    </div>
                </div>
                <div className=" w-100 h-100  card2 d-flex justify-content-center p-1 flex-wrap  ">
                    <h1 className="w-100 text-white mt-5 fw-bolder text-center pt-2">نموذج الحجز </h1>
                    <form action="http://127.0.0.1:8000/api/hejama" method="post" encType="application" className="w-50 h-75 form1  px-2 rounded-4 mb-4 bg-form " > 
                            <label htmlFor="الاسم" className="text-white mb-3 mt-3" >الاسم</label>
                            <input type="text" name="name" id="الاسم" className="w-100  py-2 bg-inp " />
                            <label htmlFor="الطول" className="text-white mb-3 mt-3">الطول</label>
                            <input type="text" name="height" id="الطول" className="w-100 bg-inp py-2" />
                            <label htmlFor="السن"className="text-white mb-3 mt-3">السن</label>
                            <input type="number" name="age" id="السن" className="w-100 bg-inp py-2"/>
                            <label htmlFor="phone"className="text-white mb-3 mt-3">التلفون</label>
                            <input type="tel" name="phone" id="phone" className="w-100 bg-inp py-2"/>
                            <label htmlFor="التاريخ المرضى"className="text-white mb-3 mt-3">التاريخ المرضى</label>
                            <textarea name="medical_history" id="" className="w-100  bg-inp py-4"></textarea>
                            <label htmlFor="نوع الجلسه"className="text-white mb-3 mt-3">نوع الجلسه</label>
                            <select name="hegama" id="" className="w-100 py-2 bg-dark text-white">
                              <option value="جلسه حجامه" >جلسه حجامه</option>
                                
                                <option value="جلسه مساج">جلسه مساج</option>
                                <option value="جلسه حجامه وابر صينيه">جلسه حجامه و كيرو براكتيك</option>
                                <option value="مساج و كيروبراكتيك">مساج و كيرو براكتيك</option>
                                <option value="جلسه كامله">جلسه مركبه</option>
                                
                        
                  
                            </select>
                            <button type="submit" className="w-100 rounded-3 bg-primary my-4 py-2" > ادخال</button>
                    </form>
                   
                </div>
           </div>
        </section>
    )
};
  
    
