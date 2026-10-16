import React from 'react'

import Product from './Product'
export default function Home() {

    let categories=[
        "laptop","mobile","shoes","mouse","jeans"

    ]


    const products = [
  {
    id: 1,
    name: "I phone",
    price: 59.99,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/mobile/w/0/q/-original-imahqvadhcgcadge.jpeg?q=90"
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 129.50,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/smartwatch/n/o/1/36-322-wrb-sw-halo3-std-blk-blk-android-ios-noise-yes-original-imahn4pfzs5dufhf.jpeg?q=90"
  },
  {
    id: 3,
    name: "Ergonomic Mechanical Keyboard",
    price: 89.99,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/q/k/b/-original-imahbv93hcjaadnn.jpeg?q=70"
  },
  {
    id: 4,
     name: "Smart Fitness Watch",
    price: 45.00,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/w/j/36-3-kk07-sdt-a21531-android-ios-kk07-yes-original-imahqyk77r2nfhut.jpeg?q=70"
  },
  {
    id: 5,
     name: "I phone",
    price: 45.00,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/a/-resized-original-imahft5nxmyqndhf.jpeg?q=70"
  },
  {
    id: 8,
     name: "I phone",
    price: 45.00,
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/n/-original-imahft5ndwfkx6ez.jpeg?q=70"
  }
];


  return (
    <div className='w-6xl p-4 mx-auto flex mb-4'>
         <div className='w-1/4'>
           <section>
             <h2 className='p-3 uppercase text-center text-2xl'>Categoris</h2>
               <ul>
                   {
                     categories&&categories.map(value=>
                        <li><a href="#">{value}</a></li>
                     )


                   }
                </ul>

             </section>
       </div>
       <div className='w-3/4'>
        <section>
           <h2 className='p-3 uppercase text-center text-2xl'>Products</h2>
               <div className='grid gap-3 grid-cols-3'>
                  {
                     products&&products.map(value=>
                      <Product

                      name={value.name}
                      price={value.price}
                     image={value.image}
                      
                      
                      
                      />
                     )


                   }
            


               </div>
          </section>     







       </div>

        
    </div>
  )
}
