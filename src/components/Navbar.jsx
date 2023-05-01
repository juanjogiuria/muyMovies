import React from 'react'
import logo from '../assets/Muy11.png'
import CartWidget from './CartWidget'
import { useCartContext } from '../context/CartContext'

import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

const Navbar = () => {

  const {user} = useCartContext()

  return (
    <header className='nav-container'>
      <Link to='/'>
        <img className='logo' src={logo} alt="" />
      </Link>

      <div className='nav-controllers'>

        {(user === null) ? <LoginButton /> : <LogoutButton/>}

        <CartWidget />
      </div>

    </header>
  )
}

export default Navbar