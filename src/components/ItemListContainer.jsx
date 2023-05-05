import React, { useState, useEffect } from 'react'
import Categorys from './Categorys'
import ItemList from './ItemList'

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
    let API_key = "api_key=5d13f11367ab0f16d0af451127a33a38&language=es-ES"
    let base_url = "https://api.themoviedb.org/3"
    let genres_url = base_url + '/genre/movie/list?' + API_key
    let img_path = "https://image.tmdb.org/t/p/original"
    const [generos, setGeneros] = useState([])

    useEffect(() => {
        fetch(url_set).then(res => res.json()).then(data => {
            setMovies(data.results)
            console.log(data.results)
        })
    }, [url_set])



    const background = {
        backgroundImage: `url("${bg}")`
    }

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

        if (index < 10) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }

    }

    useEffect(() => {

        if (movies.length != 0) {

            const interval = setInterval(changeBackGround, 4000)

            return () => clearInterval(interval)

        }

    })

    return (
        <div className='body-container'>

            <div className='bg-title' style={background}>
                <section className='title-search'>

                    <div className="title-container">

                        <h1 className='title'><img className='title-img' src={title} /> </h1>
                        {/* <p className="parrafo">Millones de peliculas, series y personajes por conocer. Adelante.</p> */}
                    </div>


                    <form className='search-container'>
                        <input type="text" placeholder='Millones de peliculas, series y personajes por conocer. Aqui puedes buscar lo que quieras' onChange={(e) => {
                            setSearch(e.target.value)
                            setUrl(search_url + search)
                        }} />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </form>


                </section>

            </div>

            <Categorys generos={generos} handleCategory={handleCategory} />

            <ItemList movies={movies} />

        </div>
    )
}

export default ItemListContainer