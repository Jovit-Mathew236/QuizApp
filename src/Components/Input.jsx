// import React from 'react'
import './Components.scss'

const Input = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <input type={props.type} placeholder={props.placeholder} />
  )
}

export default Input