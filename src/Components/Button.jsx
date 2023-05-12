/* eslint-disable react/prop-types */
// import React from 'react'

const Button = (props) => {
  return (
        <button type={props.type} onClick={props.onclick}>{props.text}</button>
  )
}

export default Button