import React from 'react'
import { Link } from 'react-router-dom'

function Card(movie) {

  let img_path = "https://image.tmdb.org/t/p/w500"
  let img_path_original = "https://image.tmdb.org/t/p/original"




  return (
    <Link to={`/detail/${movie.info.id}`}>
      <div className='card-container' data-aos="zoom-in">
        <img src={img_path_original + movie.info.poster_path} className="card-img" />
        <div className="info-container">
          <h4 className="movie-title">{movie.info.title}</h4>
          <p className="rating">{movie.info.vote_average}</p>
          {/* <i className="fa-solid fa-certificate fa-spin-pulse fa-2xl rating-icon" Style="color: #24d630;"></i> */}
          <i className="fa-sharp fa-solid fa-star fa-beat-fade fa-xl rating-icon"> </i>
        
        </div>
        <div>
        </div>
      </div>
    </Link>
  )
}

export default Card