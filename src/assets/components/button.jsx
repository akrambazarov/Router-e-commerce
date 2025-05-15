import React from 'react'

const Button = ({className,text}) => {
  return (
   <button className={`px-4 py-2 rounded-lg ${className}`}>{text}</button>
  )
}

export default Button