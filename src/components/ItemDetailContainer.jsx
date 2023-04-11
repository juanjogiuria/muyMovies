import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import Buttons from './Buttons'

let base_url = "https://api.themoviedb.org/3/movie/"
let API_key = "?api_key=5d13f11367ab0f16d0af451127a33a38&language=es-ES"
let img_path = "https://image.tmdb.org/t/p/w500"
let img_path_original = "https://image.tmdb.org/t/p/original"

function ItemDetailContainer() {

  const { pid } = useParams()

  console.log(`Valor de pid: ${pid}`)

  let url = base_url + `${pid}` + API_key
  let video_url = base_url + `${pid}` + '/videos' + API_key
  console.log(`el link: ${url}`)



  const [url_set, setUrl] = useState(url)
  const [movie, setMovie] = useState([])
  const [trailer, setTrailer] = useState([])


  useEffect(() => {
    fetch(url_set).then(res => res.json()).then(data => {
      console.log(data)
      setMovie(data)
    })

  }, [url_set])

  console.log(`Youtube: https://api.themoviedb.org/3/movie/${pid}/videos${API_key}`)
  console.log(video_url)

  
  useEffect(() => {
    fetch(video_url).then(res => res.json()).then(data => {
      console.log(data)
      setTrailer(data)
    })

  }, [video_url])






  return (
    //<div>hola</div>
    <div style={{ backgroundImage: `url("${img_path_original + movie.backdrop_path}")` }} className='detail-bg' >
      <div className='detail-container'>

        <img src={img_path + movie.poster_path} className="detail-img" />
        <div className='info-container'>
          <h1 className='detail-title'>{movie.title} <p className='detail-fecha'> ( {movie.release_date} ) </p> </h1>
          <div className='genres-container'>
            {
              (movie.genres)?.map((genre) =>(
                <h4 className='detail-genre' key={genre.id}>{genre.name}   |</h4>
              ))
            }
          </div>
          <h2 className='detail-overview'>{movie.overview}</h2>
          <div className='trailer-container'>
          {
            !trailer.results ? <h1>Not a trailer</h1> : trailer.results.length ? <iframe src={`https://www.youtube.com/embed/${trailer.results[0].key}`} frameborder="0" className='trailer' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> : <h1>Trailer no disponible</h1>
          }
          </div>
          



          <Buttons/>

        </div>

      </div>
    </div>
  )
}

export default ItemDetailContainer