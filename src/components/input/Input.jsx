import React from 'react'
import c from './Input.module.css'

function Input(props) {
  return (
    <label>
        <input className={c.input} {...props} />
    </label>
  )
}

export default Input