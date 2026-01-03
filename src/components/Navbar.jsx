import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdSunny } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="flex w-full justify-between px-[70px] items-center h-[100px] border-b-[2px] border-gray-800">
        <div className="logo">
            <h3 className='text-[25px] font-[700] sp-text'>GenUi</h3>
        </div>
        <div className="icons flex gap-4">
          <div className="icon"><MdSunny /></div>
          <div className="icon"><FaUser /></div>
          <div className="icon"><IoMdSettings /></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
