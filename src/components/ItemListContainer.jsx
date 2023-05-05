import React, { useState, useEffect } from 'react'
import Categorys from './Categorys'
import ItemList from './ItemList'
import TitleAndSearch from './TitleAndSearch'

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

            <TitleAndSearch background={background} title={title} search_ulr={search_url}  setSearch={setSearch} setUrl={setUrl}/>
            
            <Categorys generos={generos} handleCategory={handleCategory}/>

            <ItemList movies={movies}/>

        </div>
    )
}

export default ItemListContainer