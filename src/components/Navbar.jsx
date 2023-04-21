import React from 'react'
import logo from '../assets/logo4.png'
import CartWidget from './CartWidget'

import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header className='nav-container'>
      <Link to='/'>
        <img className='logo' src={logo} alt="" />
      </Link>

      <CartWidget />

    </header>
  )
}

export default Navbar