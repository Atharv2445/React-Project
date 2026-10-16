
import { BrowserRouter } from "react-router";
import Home from "./Home";
import Login from "./Login";
import Showuser from "./Showuser";
import Adduser from "./Adduser";




 const  routeValue=(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
       <Route path="" element={<Home />} />
         <Route path="" element={<Login />} />
           <Route path="" element={<Showuser/>} />
             <Route path="" element={<Adduser />} />
    </Routes>
  </BrowserRouter>
)

module.exports=routeValue;

