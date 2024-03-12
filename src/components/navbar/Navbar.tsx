import { aliff } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  return (
    <div className="bg-white flex fixed left-0 right-0 h-[75px]  py-4 scroll:shadow-lg z-10">
      <div className="md:container md:mx-auto px-4 flex items-center justify-between   gap-2 ">
        <Link href={"/"}>
          {" "}
          <Image src={aliff} alt="Logo" width={112} height={32} />
        </Link>
        <button className="py-2  ml-1 mr-1 duration-200 px-3 h-[43px] lg:w-52 rounded-lg flex  items-center justify-center gap-2 relative font-medium bg-yellow-300">
          <div className=" bg-black w-6 h-1 block -mt-4">
            <span className="block  h-1 bg-black"></span>
            <span className="block mt-1 h-1 bg-black"></span>
            <span className="block mt-1  h-1 bg-black"></span>
          </div>
          <span className="hidden lg:block w-32">Tovarlar katalogi</span>
        </button>
        <div>
          <form className="flex items-center relative  bg-yellow-300 h-[43px] rounded-md  xl:w-[545px]">
            <div className="w-64 md:w-72 lg:w-80 outline-none  xl:w-[500px]">
              <input
                type="search"
                className="w-full ml-[2px] outline-none pl-4 pr-2 text-sm flex items-center rounded-s-lg border-yellow-300 placeholder:text-gray-600   h-[40px]"
                placeholder="Tovarlarni izlash"
              />
            </div>
            <button type="submit" className="ml-2 mr-2 ">
              <Image src='' alt="searchicon" className="w-6 h-6" />
            </button>
          </form>
        </div>
        <div className="group h-[43px] gap-1 items-center flex flex-col cursor-pointer ">
          <Image src='' alt="basketIco" className="w-5 h-5 " />
          <p className="text-[12px] group-hover:text-yellow-300 duration-200">
            Savat
          </p>
        </div>
        <div className="group h-[43px] gap-1 items-center flex-col cursor-pointer hidden md:flex ">
          <Image src='' alt="basketIco" className="w-5 h-5 " />
          <p className="text-[12px] group-hover:text-yellow-300 duration-200">
            Saralanganlar
          </p>
        </div>
        <button className="border-yellow-300 border-2 w-[63px] h-[42px] rounded-lg  text-sm hover:bg-yellow-100 ease-in duration-300">
          Kirish
        </button>
        {/* <ThemeSwitch /> */}
      </div>
    </div>
  )
}

export default Navbar
