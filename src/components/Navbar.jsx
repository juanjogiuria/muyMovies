import React from 'react'
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='nav-container'>
      <Link to='/'>
        <img className='logo' src={logo} alt="" />
      </Link>
      
      
      <nav className='categories-container'>
        <ul className='categories'>
          <li>Peliculas</li>
          <li>Series</li>
          <li>Documentales</li>
          <li>Categorias</li>
        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default Navbar