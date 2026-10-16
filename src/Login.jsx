import React, { useState } from 'react'

export default function Login() {

  let [counter,setCounter]=useState(1);
  function myfunc(){
      setCounter(counter++);


  }

  return (
    <div>
         Login user
         <h1>state variable</h1>
         <h4>{counter}</h4>
         <button onClick={myfunc}>count</button>

    </div>
  )
}
