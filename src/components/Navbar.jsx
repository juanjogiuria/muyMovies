import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'

import { Link } from 'react-router-dom'

const Navbar = () => {


  let API_key = "api_key=5d13f11367ab0f16d0af451127a33a38&language=es-ES"
  let base_url = "https://api.themoviedb.org/3"
  let genres_url = base_url + '/genre/movie/list?' + API_key

  const [generos, setGeneros] = useState([])

  useEffect(() => {
    fetch(genres_url).then(res => res.json()).then(data => {
      console.log(data)
      setGeneros(data)
    })

  }, [])


  if(generos.genres){
    console.log(generos.genres[0].name)
  }




  return (
    <header className='nav-container'>
      <Link to='/'>
        <img className='logo' src={logo} alt="" />
      </Link>

      
      <nav className='categories-container'>
        <ul className='categories'>
          <li><span>Descubrir</span></li>

          <li><span>Categorias</span>
            <ul className='category-container'>
              {
                (generos.genres)?.map((genre) => (
                  <li key={genre.id} className='category'>{genre.name}</li>
                ))
              }
            </ul>
          </li>
        </ul>

        
      </nav>

      <CartWidget />

    </header>
  )
}

export default Navbar