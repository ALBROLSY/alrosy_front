
import './App.css'


import Nav from './componant/layaut/nav.jsx'
import Footer from './componant/layaut/footer.jsx'
import { Outlet } from 'react-router-dom'

export default function App(params) {
    

   
 
  return (
<>
   <header>
     <Nav/>
   </header>

    
 <main>
   <Outlet/>    
 </main>

  
            
<Footer/>              
          
 </>          
             

         
     
   
  )
};

