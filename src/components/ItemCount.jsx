import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

function ItemCount({movie}) {

    const {addToCart , cartList, sumarItems} = useCartContext()

    const [count, setCount] = useState(1)

    const handleCountIncrease = () => {
        setCount(count + 1)
    }

    const handleCountDecrease = () => {
        if(count >= 1)
        setCount(count - 1)
    }

    const onAdd = () => {
        addToCart(movie, count)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado correctamente',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'popup-alert',
                title: 'title-alert',
                container: 'alert-container',
                content: 'content-class',
                htmlContainer: 'html-container',
                validationMessage: 'message',
                icon: 'icon',
                confirmButton: 'confirm-button',

            }
          })
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