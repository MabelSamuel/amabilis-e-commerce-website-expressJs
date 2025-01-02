import React from 'react'

const Button = ({ text, bgColor, onClick, className='' }) => {
  return (
    <button className={`w-1/2 ${bgColor} h-10 rounded-md ${className}`} onClick={onClick}>{ text }</button>
  )
}

export default Button