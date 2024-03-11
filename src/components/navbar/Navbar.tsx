import { aliff } from '@/assets'
import React from 'react'

const Navbar = () => {
    
  return (
    <div className='nav w-[100%] h-[70px]  flex items-center justify-around fixed bg-white top-0  z-40'>
        <img src={aliff} alt="alif shop" />
        <button className='bg-yellow-300 w-[180px] h-[40px] rounded-lg'> <i className="fa-solid fa-bars"></i>  Tolovlar katalogi</button>
        <input placeholder='Tovarlarni izlash' type="text" className=' w-[360px] h-[40px] p-3 bg-yellow-500 text-black' />
        <h2 className='cursor-pointer'>Savat</h2>
        <h2  className='cursor-pointer'>Saralanganlar</h2>
        <button  className='cursor-pointer'>Kirish</button>
    </div>
  )
}

export default Navbar
