import React from 'react'
import axios from 'axios'
import { useRef } from 'react'


export default function Adduser() {
   
  let x1=useRef();
  let x2=useRef();
  let x3=useRef();

  function myfunction(e){

    e.preventDefault();
    console.log(x1);
     console.log(x2);
      console.log(x3);

      console.log(x1.current.value);
          console.log(x2.current.value);
              console.log(x3.current.value);

              let data={

                name:x1.current.value,
                 age:x2.current.value,
                  place:x3.current.value,

              }
              console.log(data);


              axios.post( "http://localhost:8080/add",data).then((result)=>{
                        console.log(result);

              }).catch((err)=>{
                       
                console.log(err);
 
              })


  }
   return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
  <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md border border-gray-100">
    <form className="space-y-5">
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
        <input 
          type="text" 
          ref={x1}
          name="name" 
          id="name" 
          placeholder="John Doe"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" 
        />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1.5">Age</label>
        <input 
          type="text"
          ref={x2} 
          name="age" 
          id="age" 
          placeholder="25"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" 
        />
      </div>

      <div>
        <label htmlFor="place" className="block text-sm font-medium text-gray-700 mb-1.5">Place</label>
        <input 
          type="text"
          ref={x3} 
          name="place" 
          id="place" 
          placeholder="New York"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm" 
        />
      </div>

      <button 
        onClick={myfunction}
        type="submit" 
        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
      >
        ADD
      </button>

    </form>




   </div>
  </div>

  )

}