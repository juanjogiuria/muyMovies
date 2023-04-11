import React, { useState, useEffect } from 'react'
import Card from './Card'

let API_key = "&api_key=5d13f11367ab0f16d0af451127a33a38&language=es-ES"
let base_url = "https://api.themoviedb.org/3"
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key
let search_url = base_url + "/search/movie?api_key=5d13f11367ab0f16d0af451127a33a38&language=es-ES&query="


function ItemListContainer({ title }) {

    const [movies, setMovies] = useState([])
    const [url_set, setUrl] = useState(url)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(url_set).then(res => res.json()).then(data => {
            console.log(data.results)
            setMovies(data.results)
        })

    }, [url_set])



    return (
        <div className='body-container'>
            <section className='title-search'>

            <div className="title-container">

                <h1 className='title'>¡ Bienvenidos a <img className='title-img' src={title} /> ! </h1>
                <p className="parrafo">Millones de peliculas, series y personajes por conocer. Adelante.</p>
            </div>

            <form className='search-container'>
                <input type="text" placeholder='Busca lo que quieras, no hay nada que no tenga...' onChange={(e)=>
                    {
                        setSearch(e.target.value)
                        setUrl(search_url + search)
                        }}/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>
            </section>

            <div className="movies-container">
                {
                    (movies.lenght == 0) ? <p className="not-found">Not Found</p> : movies.map((res, pos) => {
                        return (
                            <Card info={res} key={pos} />
                        )
                    })
                }
            </div>



        </div>
    )
}

export default ItemListContainer