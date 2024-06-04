import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-gray-200 m-2 px-4 py-1 whitespace-nowrap   rounded-xl h-8'>
        <button>{name}</button>
    </div>
  )
}

export default Button;