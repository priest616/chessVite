import React from 'react'
import { footer } from '../Data'

const Footer = () => {
  return (
    <>
  <div className="flex items-center justify-center w-full py-5">
  {footer.map((items, index)=>(
        <React.Fragment key={index}>
            <p className={`${index === 5 ? '': 'border-r'}  px-4 cursor-pointer`}>{items.menu}</p>
        </React.Fragment>
    ))}
  </div>
    </>
  )
}

export default Footer