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
  console.log(`el link: ${url}`)



  const [url_set, setUrl] = useState(url)
  const [movie, setMovie] = useState([])


  useEffect(() => {
    fetch(url_set).then(res => res.json()).then(data => {
      console.log(data)
      setMovie(data)
    })

  }, [url_set])


  //let array = [{id: 1, name: 'juanjo'},
 //              {id: 2, name: 'azul'}]
  //console.log((movie.genres)[0].name)
  //console.log(array)
  //console.log(array[0].name)




  return (
    //<div>hola</div>
    <div style={{ backgroundImage: `url("${img_path_original + movie.backdrop_path}")` }} className='detail-bg' >
      <div className='detail-container'>

        <img src={img_path + movie.poster_path} className="detail-img" />
        <div className='info-container'>
          <h1 className='detail-title'>{movie.original_title}</h1>
          <div className='genres-container'>
            {
              (movie.genres)?.map((genre) =>(
                <h4 className='detail-genre' key={genre.id}>{genre.name}</h4>
              ))
            }
          </div>
          <h2 className='detail-overview'>{movie.overview}</h2>
          <Buttons/>

        </div>

      </div>
    </div>
  )
}

export default ItemDetailContainer