import React from 'react'
import { header } from '../Data'
import Login from "../../accountModal/Login"
import Signin from "../../accountModal/Signin"

const Header = () => {
  return (
    <>
    <div className='flex items-center justify-between px-3 py-6 shadow shadow-[#3333]'>
        <img src="https://picsum.photos/50/30" className='rounded' alt="" />
        <div className='flex justify-evenly grow'>
            {header.map((items, index)=>(
                <React.Fragment key={index}>
                    <p className='hover:font-[800] hover:underline'>{items.menu}</p>
                </React.Fragment>
            ))}
        </div>
        <div className="flex justify-between gap-2">
            <Login />
            <Signin />
        </div>
    </div>
    </>
  )
}

export default Header