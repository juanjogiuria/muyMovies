import React, { useState, useEffect } from 'react'
import Card from './Card'

let API_key = "&api_key=5d13f11367ab0f16d0af451127a33a38"
let base_url = "https://api.themoviedb.org/3"
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key

function ItemListContainer({ title }) {
    const [count, setCount] = useState(0)
    const [movies, setMovies] = useState([])
    const [url_set, setUrl] = useState(url)




    useEffect(() => {
        fetch(url_set).then(res => res.json()).then(data => {
            console.log(data.results)
            setMovies(data.results)
        })

    }, [url_set])


    const handleCountIncrease = () => {
        setCount(count + 1)
    }

    const handleCountDecrease = () => {
        setCount(count - 1)
    }

    return (
        <div className='body-container'>

            {/* TITULO DE LA WEB */}
            <div className="title-container">

                <h1 className='title'>¡ Bienvenidos a <img src={title} /> ! </h1>
                <p className="parrafo">Millones de peliculas, series y personajes por conocer. Adelante.</p>
            </div>


            <div className="movies-container">
                {
                    (movies.lenght == 0) ? <p className="not-found">Not Found</p> : movies.map((res, pos) => {
                        return (
                            <Card info={res} key={pos} />
                        )
                    })
                }
            </div>

            {/* //BOTON DE CANTIDAD */}
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

export default ItemListContainer