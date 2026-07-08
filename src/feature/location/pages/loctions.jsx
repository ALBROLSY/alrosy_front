export default function Loctions(params) {
    return(
            <section className="py-5 bg-black d-flex justify-content-center flex-wrap gap-4" >
              <h1 className="text-white text-center mt-5 w-100">لوكيشن المركز</h1>
                <div className="w-45 h-700  pt-5 d-flex mt-4 justify-content-center bg-form flex-wrap rounded-5">
                   <h1 className="text-white text-center  w-100">القسم الرجالى</h1>
                    <div className="w-100 h-25  p-2 pt-2 d-flex  justify-content-evenly "> 
                        <img src="src/assets/image/IMG-20260403-WA0020.jpg " alt="inside" className="w-25 h-100 rounded-3 "/>
                        <img src="src/assets/image/IMG-20260403-WA0015.jpg" alt="outside"  className="w-25 h-100 rounded-3"/>
                    </div >
                    <div className="w-100 h-75  p-1 d-flex  justify-content-center flex-wrap ">
                          <div className="w-45 h-50 mt-3 userform">
                            {/* <iframe src={'https://maps.app.goo.gl/KSmJz2vXHeYbuUf76'} frameborder="4" className="w-100 h-100 rounded-2"></iframe> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d641540.3660547719!2d27.182959801498843!3d31.340898783714092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1781465184875!5m2!1sen!2seg"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-100 h-100 rounded-2"></iframe>
                          </div>
                          <div className="w-75 h-25 bg-white d-flex pb-1 rounded-3">
                            <h2 className="w-100 text-center">      :العنوان<br/><br/>
                             <h6>شارع.......متفرع من .........امام ماركت...... </h6>
                            </h2>
                            <p className="w-100 text-center pt-3">مواعيد العمل :من 12صباحا الى 7مساءا
                              <br/>رجال فقط
                              <br/> للحجز:01223334455
                              <br/>Dr:omar xbbbxbsjb
                            </p>
                            
                          </div>
                    </div>
                </div>
                <div className="w-45 h-700   d-flex  justify-content-center bg-form flex-wrap rounded-5 ">
                      <h1 className="text-white text-center mt-1 w-100">القسم النسائى</h1>
                       <div className="w-100 h-25  p-2 pt-2 d-flex  justify-content-evenly "> 
                        <img src="src/assets/image/IMG-20260403-WA0020.jpg " alt="inside" className="w-25 h-100 rounded-3 "/>
                        <img src="src/assets/image/IMG-20260403-WA0015.jpg" alt="outside"  className="w-25 h-100 rounded-3"/>
                    </div >
                    <div className="w-100 h-75  p-1 d-flex  justify-content-center flex-wrap ">
                          <div className="w-45 h-50 mt-3 userform">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d885.8799218812701!2d27.22662216983164!3d31.35480429055479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1781465549200!5m2!1sen!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-100 h-100 rounded-2"></iframe>
                          </div>
                          <div className="w-75 h-25 bg-secondary d-flex pb-1 rounded-3 flex-wra">
                            <h2 className="w-100 text-center">      :العنوان<br/><br/>
                             <h6>شارع.......متفرع من .........امام ماركت...... </h6>
                            </h2>
                            <p className="w-100 text-center pt-3">مواعيد العمل :من 12صباحا الى 7مساءا
                              <br/>سيدات فقط
                              <br/> للحجز:01223334455
                              <br/>Dr:omar xbbbxbsjb
                            </p>
                            
                          </div>
                    </div>
                </div>


            </section>


    )
};
