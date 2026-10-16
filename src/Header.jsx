import React from 'react'

export default function Header() {
  return (
    <div className='w-6xl p-4 mx-auto flex mb-4 border mt-2'>
        <div className='w-1/6'>
             <img src='https://imworld.rediff.com/worldrediff/pix/rediff_newlogo.svg' className='w-full'></img>

        </div>

     <div className='w-5/6 '>
        <ul className='flex justify-end pt-2 '>
            <li className='pl-3'><a href='#'>Home</a></li>
             <li className='pl-3'><a href='#'>add</a></li>
              <li className='pl-3'><a href='#'>Show Users</a></li>
               <li className='pl-3'><a href='#'>Login</a></li>
        </ul>
        </div>

         </div>
  )
}
