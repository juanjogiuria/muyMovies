import React from 'react'
import { Link } from 'react-router-dom'

function Card(movie) {

  let img_path = "https://image.tmdb.org/t/p/w500"

  console.log(movie)


  return (
    <Link to={`/detail/${movie.info.id}`}>
      <div className='card-container'>
        <img src={img_path + movie.info.poster_path} className="card-img" />
        <div className="info-container">
          <h4 className="movie-title">{movie.info.title}</h4>
          <p className="rating">{movie.info.vote_average}</p>
        </div>
        <div>
        </div>
      </div>
    </Link>
  )
}

export default Card