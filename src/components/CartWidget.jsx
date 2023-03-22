import React from 'react'
import cart from '../assets/cart2.png'
import '../App.css'


function CartWidget() {
    return (
        <div className='cart-container'>
            <img src={cart} alt="" />
            <div id='cart-count' className='cart-count'>1</div>
        </div>
    )
}

export default CartWidget