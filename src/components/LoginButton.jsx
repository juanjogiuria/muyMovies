import React from 'react'
import { Link } from 'react-router-dom'

function LoginButton() {
  return (
    <Link to={'/login'} className='login-button-container'>
        <button className='login-button'>Iniciar sesion</button>
    </Link>
  )
}

export default LoginButton