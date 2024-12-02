import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css';


const Header = () => {
  return (
    <>
    <ul >
      <li>
        <NavLink to="/" className={({isActive}) => `${isActive ? "wc-active" : ""} `}>Home</NavLink></li>
      <li>
        <NavLink to='/about' className={({isActive}) => `${isActive ? "wc-active" : ""} `}>About</NavLink></li>
        <li>
        <NavLink to='/github' className={({isActive}) => `${isActive ? "wc-active" : ""} `}>Github</NavLink></li>
    </ul>
    </>
  )
}

export default Header