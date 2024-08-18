"use client"
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

export default function MobileNavbar() {
  const [toggle, setToggle] = useState(false)
  // 512

  return (
    <div className='lg:hidden'>
      {
        toggle
          ?
          <>
            <MdKeyboardArrowUp className="cursor-pointer" size={24} onClick={() => setToggle(prev => !prev)} />
            <nav className="absolute top-10 right-0 w-32 border py-6 rounded">
              <ul className="flex flex-col items-center gap-3 px-2">
                <li className="text-lg font-semibold tracking-widest hover:border-b-2 border-red-400 transition-all ease-in-out duration-150 cursor-pointer w-full text-center">Discover</li>
                <li className="text-lg font-semibold tracking-widest hover:border-b-2 border-red-400 transition-all ease-in-out duration-150 cursor-pointer w-full text-center">Profile</li>
              </ul>
            </nav>
          </>
          :
          <>
            <MdKeyboardArrowDown className="cursor-pointer" size={24} onClick={() => setToggle(prev => !prev)} />
          </>
      }
    </div>
  )
}
