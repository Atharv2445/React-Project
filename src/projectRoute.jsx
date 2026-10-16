import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import Login from "./Login";
import Showuser from "./Showuser";
import Adduser from "./Adduser";
import PageNotFound from "./PageNotFound";
import App from "./App";




 const  routeValue=(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
         <Route path="/login" element={<Login />} />
           <Route path="/show-user" element={<Showuser/>} />
             <Route path="/add-user" element={<Adduser/>} />
              <Route path="*" element={<PageNotFound/>}/>
      </Route>
             
    </Routes>
  </BrowserRouter>
);

export default routeValue;

