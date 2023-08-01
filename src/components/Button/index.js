import React from 'react'

const Button = ({ className, children, text }) => {
  return (
    <button className={className}>{children ? children : text }</button>
  )
}

export default Button