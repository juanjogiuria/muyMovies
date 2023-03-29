import React from 'react'

function Card(movie) {

    let img_path = "https://image.tmdb.org/t/p/w500"


  return (
    <div className='card-container'>
        <img src={img_path+movie.info.poster_path} className="card-img" />
        <div className="info-container">
            <h4 className="movie-title">{movie.info.title}</h4>
            <p className="rating">{movie.info.vote_average}</p>
        </div>
    </div>
  )
}

export default Card