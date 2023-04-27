import React, { useEffect, useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


function CartWidget() {

    const { totalItems } = useCartContext()

    const ifHaveItems = () => {
        if (totalItems != 0) {
            return totalItems
        } else {
            return ""
        }
    }


    return (
        <Link to={`/cart`} className='cart-container-nav'>
            
                <i className='fa-solid fa-cart-shopping  cart'>
                    <div className="cart-count">{ifHaveItems()}</div>

                </i>
            
        </Link>
    )
}

export default CartWidget