import React from 'react'
import { FaHamburger } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Header() {
  return (
   <header className='flex justify-between max-w-7xl m-auto items-center p-2 text-2xl'>
    <Link className='flex items-center gap-4 font-bold' to="/">
     <FaHamburger/> 
     Taste Vibes
    </Link>

    <div className=' flex gap-4'>
      <button className='cursor-pointer'>
      <CiSearch/>
      </button>

      <button  className='cursor-pointer'>
       <VscThreeBars/>
      </button>
    </div>
   </header>
  )
}

export default Header