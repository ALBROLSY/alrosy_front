import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './route'
import { RouterProvider} from 'react-router-dom'
import { Authprovider } from './context/usercontext'



createRoot(document.getElementById('root')).render(
  
          <StrictMode> 
              
                <Authprovider>
                   <RouterProvider router={router}/>
                </Authprovider>
             
          </StrictMode>
  
);
