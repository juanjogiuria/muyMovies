import React, { useState } from 'react'

function Buttons() {

    const [count, setCount] = useState(0)

    const handleCountIncrease = () => {
        setCount(count + 1)
    }

    const handleCountDecrease = () => {
        setCount(count - 1)
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
            <button className='button-agregar'> Agregar al carrito</button>
        </div>
    )
}

export default Buttons