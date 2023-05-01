import React, { useState } from 'react'
import loginWithEmailPassword from '../functions/loginWithEmailPassword'
import registerUser from '../functions/registerUser'
import loginWithGoogle from '../functions/loginWithGoogle'
import bottonGoogle from '../assets/boton-google.png'

function Login() {

    const [isLoggingIn, setIsLoggingIn] = useState(false)

    async function submitHandler(e){
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value
        console.log('usuario', username, password)
        
        if(!isLoggingIn){
            await loginWithEmailPassword(username, password)
        }else{
            await registerUser(username, password)
        }


    }
    return (
        <div className='login-container'>
            <h1>{!isLoggingIn ? 'Inicia Sesion' : 'Registrate'}</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button className='button-submit' type='submit'>{!isLoggingIn ? 'Acceder' : 'Registrate'}</button>
            </form>
            {/* <button className='button-google' onClick={loginWithGoogle}></button> */}
            <img src={bottonGoogle} className='button-google' onClick={loginWithGoogle}></img>
            <button className='button-login' onClick={() => setIsLoggingIn(!isLoggingIn)}>
                { !isLoggingIn 
                ? 'No tienes cuenta? Crea una'
                : 'Ya tienes cuenta? Accede'}
            </button>
        </div>
    )
}

export default Login