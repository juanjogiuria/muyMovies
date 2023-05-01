import React from 'react'
import  logOut  from '../functions/logOut'

function LogoutButton() {
  return (
    <div className='login-button-container'>
        <button onClick={logOut} className='login-button'>Cerrar Sesion</button>
    </div>
  )
}

export default LogoutButton