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
    const [bg, setBg] = useState("https://image.tmdb.org/t/p/original/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg")
    const [index, setIndex] = useState(0)
    let img_path = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        fetch(url_set).then(res => res.json()).then(data => {
            setMovies(data.results)
        })
        console.log(movies)
    }, [url_set])

    let API_key = "api_key=5d13f11367ab0f16d0af451127a33a38&language=es-ES"
    let base_url = "https://api.themoviedb.org/3"
    let genres_url = base_url + '/genre/movie/list?' + API_key

    const [generos, setGeneros] = useState([])

    const handleCategory = (category) => {
        setUrl("https://api.themoviedb.org/3/discover/movie?" + API_key + "&with_genres=" + category)
    }

    useEffect(() => {
        fetch(genres_url).then(res => res.json()).then(data => {
            setGeneros(data)
        })

    }, [])



    const changeBackGround = () => {

        setBg(img_path + movies[index].backdrop_path)

        if (index < 6) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }

    }

    useEffect(() => {

        if (movies.length != 0) {

            const interval = setInterval(changeBackGround, 6000)

            return () => clearInterval(interval)

        }

    })

    return (
        <div className='body-container'>
            <div className='bg-title'  style={{ backgroundImage: `url("${bg}")` }}>
                <section className='title-search'>

                    <div className="title-container">

                        <h1 className='title'><img className='title-img' src={title} /> </h1>
                        <p className="parrafo">Millones de peliculas, series y personajes por conocer. Adelante.</p>
                    </div>


                    <form className='search-container'>
                        <input type="text" onChange={(e) => {
                            setSearch(e.target.value)
                            setUrl(search_url + search)
                        }} />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </form>


                </section>

            </div>

            <div className="categorys-container">
                <ul>
                    {
                        (generos.genres)?.map((genre) => (
                            <li onClick={(e) => handleCategory(genre.id)} key={genre.id} className='categorys'>{genre.name}</li>
                        ))
                    }
                </ul>
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



        </div>
    )
}

export default ItemListContainer