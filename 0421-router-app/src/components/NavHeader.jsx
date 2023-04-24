import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavHeader() {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/storylist'>Story</NavLink>
    </div>
  )
}
