import React from 'react'

const Button = ({title}) => {
  return (
    <>
    <div className='flex justify-center items-center p-5'>
        <div className='p-2 bg-black text-white w-fit rounded-md hover:scale-105 transition-all cursor-pointer'>{title}</div>
    </div>
      
    </>
  )
}

export default Button
