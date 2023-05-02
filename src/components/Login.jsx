import React, { useState } from 'react'
import loginWithEmailPassword from '../functions/loginWithEmailPassword'
import registerUser from '../functions/registerUser'
import loginWithGoogle from '../functions/loginWithGoogle'
import bottonGoogle from '../assets/boton-google.png'

function Login() {

    const [isLoggingIn, setIsLoggingIn] = useState(false)

    async function submitHandler(e) {
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value
        console.log('usuario', username, password)

        if (!isLoggingIn) {
            await loginWithEmailPassword(username, password)
        } else {
            await registerUser(username, password)
        }


    }
    return (
        <div className='login-container'>
            <div className='login-box'>
                <h1>{!isLoggingIn ? 'Iniciar Sesión' : 'Unite'}</h1>
                {!isLoggingIn ?
                    <form onSubmit={submitHandler}>
                        <label htmlFor="username">Email</label>
                        <input type="email" id="username" />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" />
                        <button className='button-submit' type='submit'>{!isLoggingIn ? 'Acceder' : 'Registrate'}</button>
                    </form>
                    :
                    <form onSubmit={submitHandler}>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" />

                        <label htmlFor="lastname">Apellido</label>
                        <input type="text" id="lastname" />

                        <label htmlFor="date">Fecha de nacimiento</label>
                        <input type="date" name="datetime" id="datetime"></input>

                        <label htmlFor="username">Usuario</label>
                        <input type="text" id="username" />

                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" />

                        <button className='button-submit' type='submit'>{!isLoggingIn ? 'Acceder' : 'Registrate'}</button>
                    </form>
                }
                {/* <button className='button-google' onClick={loginWithGoogle}></button> */}
                {!isLoggingIn ? <img src={bottonGoogle} className='button-google' onClick={loginWithGoogle}></img> : ""}
                <button className='button-login' onClick={() => setIsLoggingIn(!isLoggingIn)}>
                    {!isLoggingIn
                        ? 'No tienes cuenta? Crea una'
                        : 'Ya tienes cuenta? Accede'}
                </button>
            </div>
        </div>
    )
}

export default Login