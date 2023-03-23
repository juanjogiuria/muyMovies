import React from 'react'
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'
import SearchInput from './SearchInput'

const Navbar = () => {
  return (
    <header className='nav-container'>
      <img className='logo' src={logo} alt="" />
      
      <nav className='categories-container'>
        <ul className='categories'>
          <li>Peliculas</li>
          <li>Series</li>
          <li>Documentales</li>
          <li>Categorias</li>
        </ul>
      </nav>

      <SearchInput />

      <CartWidget />

    </header>
  )
}

export default Navbar