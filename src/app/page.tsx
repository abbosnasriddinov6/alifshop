'use client'
import products from '@/store/products'
import React from 'react'
import { useEffect } from 'react'
import { pagetype } from './types'
import Lider from '@/components/slick/Lider'
import { SlBasket } from "react-icons/sl";
import 'flowbite';
import Link from 'next/link'
import axios from 'axios'

const page = () => {
  const { loading, productss, error, getproducts } = products()

  useEffect(() => {
    getproducts()
    console.log(productss);

  }, [])
  
  return (
    <>



      <section className="text-gray-600 body-font">

        <div className="container px-5 py-24 mx-auto">
          <div>
            <Lider />
          </div>
          <div className="flex flex-wrap -m-4 " >
            {productss.map((p: pagetype) => (
              <div className="xl:w-1/4 md:w-1/2 p-4 " key={p.id}>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <Link href={`/${p.id}`}><img className="h-40 rounded w-full object-cover object-center mb-6" src={p.thumbnail} alt="content" /></Link>
                  <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">{p.category}</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{p.title}</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                  <button className='flex p-3 gap-5 rounded-md bg-yellow-400 text-lg text-cyan-50'><SlBasket className=' w-[25px] h-[25px] ' />Savatga</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default page
