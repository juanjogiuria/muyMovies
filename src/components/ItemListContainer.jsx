import React, { useState } from 'react'
import Panther from '../assets/panther.jpg'

function ItemListContainer({ title }) {
    const [count, setCount] = useState(0)

    const handleCountIncrease = () => {
        setCount(count + 1)
    }

    const handleCountDecrease = () => {
        setCount(count - 1)
    }

    return (
        <div className='body-container'>
            <h1 className='title'>Bienvenidos a {title}</h1>
            <div className='p-img-container'>
                <img src={Panther} alt="" />
                <p className='parrafo'>Black Panther (Pantera Negra en América Hispana) es una película de superhéroes basada en el superhéroe de Marvel Comics del mismo nombre. Se trata de una secuela de Captain America: Civil War, la décimo octava entrega del Universo Cinematográfico de Marvel y de la Saga del Infinito, y la séptima de la Fase Tres. Se estrenó el 16 de febrero de 2018 en Estados Unidos.

                    La película fue dirigida y co-escrita por Ryan Coogler, y fue protagonizada por Chadwick Boseman como T'Challa / Pantera Negra, Michael B. Jordan como N'Jadaka / Erik Stevens / Erik Killmonger, Lupita Nyong'o como Nakia, Danai Gurira como Okoye, Martin Freeman como Everett Ross, Angela Bassett como Ramonda, Forest Whitaker como Zuri, Andy Serkis como Ulysses Klaue, Winston Duke como M'Baku, Daniel Kaluuya como W'Kabi, Letitia Wright como Shuri, y John Kani como T'Chaka.

                    En la 91.ª ceremonia de entrega de los premios Óscar, que tuvo lugar el 24 de febrero de 2019, la película ganó tres premios Óscar por Mejor Diseño de Producción, Mejor Vestuario y Mejor Banda Sonora.[1] Siendo la primera y única película del Universo Cinematográfico de Marvel en lograr ese honor, y también fue la primera y única película de superhéroes nominada a la categoría de Mejor Película.

                    Su secuela, Black Panther: Wakanda Forever, se estrenó el 11 de noviembre de 2022 en Estados Unidos.</p>
                
            </div>
            <button className='button-cantidad'>
                <div className='decrease' onClick={handleCountDecrease}>
                    -
                </div>

                {count}
                
                <div className='increase' onClick={handleCountIncrease}>
                    +
                </div>
            </button>
            <button className='button-agregar'> Agregar al carrito</button>
        </div>
    )
}

export default ItemListContainer