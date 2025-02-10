import React from 'react'

const Button = ({ text, bgColor, onClick, className='', children }) => {
  return (
    <button className={`w-1/2 ${bgColor} h-12 rounded-md ${className}`} onClick={onClick}>{ children || text }</button>
  )
}

export default Button