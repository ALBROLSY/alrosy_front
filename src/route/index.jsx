import { createHashRouter } from "react-router-dom";
import App from "../App";
import One from "../feature/home/pages/contant";
import Section2 from "../feature/training/pages/section2";
import Section3 from "../feature/hijama/pages/section3";
import Section4 from "../feature/studio/pages/section4";
import Section5 from "../feature/auth/pages/section5";
import Login from "../feature/auth/pages/Login";
import Personldata from "../feature/personaldata/pages/personldata";
import Gallery from "../feature/studio/pages/test";
import Userform from "../feature/training/pages/userform";
import Loctions from "../feature/location/pages/loctions";
export const router = createHashRouter([
      
        { path:'/', element:<App/>,children:[
          {  index:true  ,element:<One/>},
          { path:'two', element:<Section2/>},
          {path:'three', element:<Section3/>},
          {path:'four', element:<Section4/>},
          {path:'five', element:<Section5/> },
          { path:'five/login', element:<Login/>},
          { path:'Personaldata', element:<Personldata/>},
          { path:'test', element :<Gallery/>},
          {path:'Userform', element:<Userform/>},
          {path:'location', element:<Loctions/>}
        ]},
       

    ]);