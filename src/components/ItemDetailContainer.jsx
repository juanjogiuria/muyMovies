import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'

let base_url = "https://api.themoviedb.org/3/movie/"
let API_key = "?api_key=5d13f11367ab0f16d0af451127a33a38&language=us-US"
let img_path = "https://image.tmdb.org/t/p/w500"
let img_path_original = "https://image.tmdb.org/t/p/original"

function ItemDetailContainer() {


  const { pid } = useParams()

  let url = base_url + `${pid}` + API_key
  let video_url = base_url + `${pid}` + '/videos' + API_key

  const [url_set, setUrl] = useState(url)
  const [movie, setMovie] = useState([])
  const [trailer, setTrailer] = useState([])


  useEffect(() => {
    fetch(url_set).then(res => res.json()).then(data => {
      setMovie(data)
    })

  }, [url_set])


  
  useEffect(() => {
    fetch(video_url).then(res => res.json()).then(data => {
      
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
            !trailer.results ? <h1>Not a trailer</h1> : trailer.results.length ? <iframe src={`https://www.youtube.com/embed/${trailer.results[0].key}?controls=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0`}  frameBorder="0" className='trailer' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> : <h1>Trailer no disponible</h1>
          }
          </div>
          


          <ItemCount movie={movie} />
          

        </div>

      </div>
    </div>
  )
}

export default ItemDetailContainer