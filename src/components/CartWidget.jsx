import React from 'react'


function CartWidget() {
    return (
        <div className='cart-container'>
            <i className='fa-solid fa-cart-shopping fa-shake cart'></i>
            <div className="cart-count">1</div>
        </div>
    )
}

export default CartWidget