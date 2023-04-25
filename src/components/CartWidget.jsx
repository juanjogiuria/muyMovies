import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


function CartWidget() {
    const {totalItems} = useCartContext()

    
    return (
        <Link to={`/cart`}>
        <div className='cart-container-nav'>
            <i className='fa-solid fa-cart-shopping fa-shake cart'></i>
            <div className="cart-count">{totalItems}</div>
        </div>
        </Link>
    )
}

export default CartWidget