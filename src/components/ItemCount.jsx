import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'

function ItemCount({movie}) {

    const {addToCart , cartList, sumarItems} = useCartContext()

    const [count, setCount] = useState(0)

    const handleCountIncrease = () => {
        setCount(count + 1)
    }

    const handleCountDecrease = () => {
        if(count >= 1)
        setCount(count - 1)
    }

    const onAdd = () => {
        addToCart(movie, count)
        sumarItems(count)
    }

    



    return (
        <div className='button-container'>
            <button className='button-cantidad'>
                <div className='decrease' onClick={handleCountDecrease}>
                    -
                </div>

                {count}

                <div className='increase' onClick={handleCountIncrease}>
                    +
                </div>
            </button>
            {/* //BOTON 'AGREGAR AL CARRITO' */}
            <button className='button-agregar' onClick={onAdd}> Agregar al carrito </button>
        </div>
    )
}

export default ItemCount