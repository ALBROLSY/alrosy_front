import React from "react"
import { useState,useEffect } from "react"

export default function Section4(){
   const [img ,setimg] = useState('src/assets/image/istockphoto-498089299-1024x1024.jpg');
   const images = [
        { id: 1, src: 'src/assets/store/IMG_٢٠٢٤٠٨١٣_٠٣٤٢٢٢.jpg' },
        { id: 2, src: 'src/assets/store/IMG_٢٠٢٥٠٧١٧_١٨٣٨٣٠.jpg' },
        { id: 3, src: 'src/assets/store/IMG_٢٠٢٥٠٧١٧_١٨٣٩٤٨.jpg' },
        { id: 4, src: 'src/assets/store/IMG_٢٠٢٥٠٧١٧_١٨٤٠٤٤.jpg' },
        { id: 5, src: 'src/assets/store/IMG_٢٠٢٥٠٧١٧_١٨٤٠٤٤.jpg' },
        { id: 6, src: 'src/assets/store/IMG_٢٠٢٦٠٣١٤_١٦٣٤٥٢.jpg' },
        { id: 7, src: 'src/assets/image/istockphoto-479009182-1024x1024.jpg' },
        { id: 8, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        { id: 9, src: 'src/assets/image/istockphoto-479009182-1024x1024.jpg' },
        { id: 10, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        { id: 11, src: 'src/assets/image/istockphoto-479009182-1024x1024.jpg' },
        { id: 12, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        { id: 13, src: 'src/assets/image/istockphoto-479009182-1024x1024.jpg' },
        { id: 14, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        { id: 15, src: 'src/assets/image/istockphoto-479009182-1024x1024.jpg' },
        { id: 16, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        
        { id: 17, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        { id: 18, src: 'src/assets/image/istockphoto-479009182-1024x1024.jpg' },
        { id: 19, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        { id: 20, src: 'src/assets/image/istockphoto-479009182-1024x1024.jpg' },
        { id: 21, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        
        { id: 22, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        { id: 23, src: 'src/assets/image/istockphoto-479009182-1024x1024.jpg' },
        { id: 24, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        { id: 25, src: 'src/assets/image/istockphoto-479009182-1024x1024.jpg' },
        { id: 26, src: 'src/assets/icone/tiktok-brands-solid-full.svg' },
        
        

    ];
    const handleImageClick = (imageSrc) => {
        setimg(imageSrc);
    };

//    useEffect(()=>{home.src})
    return(
        <section className="bg-black">
            
                <div className="w-75 h-600  pt-4    d-flex justify-content-center align-items-center ">
                    <img src={img} alt="" className="h-75 w-75 rounded-white bg-white" name='home'/>
                </div>
                <div className="w-100 h-600 bg-form d-flex flex-wrap gap-2 p-3 justify-content-center pt-5 overflow-auto">

                                {images.map((image) => (
                                <img
                                    key={image.id}
                                    src={image.src}
                                    alt="Thumbnail"
                                    onClick={() => handleImageClick(image.src)}
                                    className="stud"
                                    loading="lazy"
                                />
                            ))}
                                {/* <img  src="src/assets/download.jpeg" alt="" className="stud" /> */}
                                {/* <img src="src/assets/facebook-brands-solid-full.svg" alt="" className="stud" />
                                <img src="src/assets/facebook-brands-solid-full.svg" alt="" className="stud" />
                                <img src="src/assets/image/istockphoto-479009182-1024x1024.jpg" alt="" className="stud" />
                                <img src="src/assets/square-instagram-brands-solid-full.svg" alt="" className="stud" />
                                <img src="src/assets/square-whatsapp-brands-solid-full.svg" alt="" className="stud" />
                                <img src="src/assets/WhatsApp Image 2025-08-26 at 16.18.00_4533b8c5.jpg" alt="" className="stud" />
                                <img src="src/assets/images.jpeg" alt="" className="stud" />
                                <img src="src/assets/image/istockphoto-479009182-1024x1024.jpg" alt="" className="stud" />
                                <img src="src/assets/square-instagram-brands-solid-full.svg" alt="" className="stud" />
                                <img src="src/assets/square-whatsapp-brands-solid-full.svg" alt="" className="stud" />
                                <img src="src/assets/WhatsApp Image 2025-08-26 at 16.18.00_4533b8c5.jpg" alt="" className="stud" />
                                <img src="src/assets/images.jpeg" alt="" className="stud" />
                                <img src="src/assets/image/istockphoto-479009182-1024x1024.jpg" alt="" className="stud" />
                                <img src="src/assets/facebook-brands-solid-full.svg" alt="" className="stud" />
                                <img src="src/assets/square-whatsapp-brands-solid-full.svg" alt="" className="stud" /> */}
                                
                                
                            </div>
           
        </section>
    )
}