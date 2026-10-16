import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Showuser() {


 let[recored,setRecord]=useState([]);
  
  useEffect(()=>{
          console.log("comp mounted and call api");

          axios.get("http://localhost:8080/user/api").then(res=>{
             console.log(res.data);
            setRecord(res.data);
          }
        ).catch((err)=>{
        
           console.log(err);

        })


  },[])
  
  
  
  
  return (
   
    <table>
         <thead>
           <tr>
            <th>name</th>
            <th>age</th>
            <th>place</th>

           </tr>

         </thead>
         <tbody>
          {
            recored&&recored.map(val=>
              <tr>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.place}</td>
              </tr>


            )


          }


         </tbody>

    </table>

    
  )
}
