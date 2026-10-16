import React from 'react'

export default function Product(props) {
  return (
   <figure className='text-center image'>
    <img  src={props.image}></img>

     <figcaption>
        <h4>{props.price}</h4>
         <p>{props.name}</p>
         <button className='p-2 bg-green-500'>Add To Cart</button>
     </figcaption>
   </figure>
  )
}
