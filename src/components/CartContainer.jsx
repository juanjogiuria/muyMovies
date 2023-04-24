import React from 'react'
import { useCartContext } from '../context/CartContext'

let img_path = "https://image.tmdb.org/t/p/w500"
let img_path_original = "https://image.tmdb.org/t/p/original"

function CartContainer() {

    const { cartList } = useCartContext()

    console.log(cartList)


    return (
        <div className='cart-container'>
            {
                (cartList).map((movie) => (
                    <div className='item-container' style={{ backgroundImage: `url("${img_path_original + movie.pelicula.backdrop_path}")` }} key={movie.pelicula.id} >

                        <img className='img-item-cart' src={img_path + movie.pelicula.poster_path} alt="" />

                        <div className='title-genre-container'>
                            <h1 className="title-item-cart"> {movie.pelicula.title} </h1>
                            <div className='genre-item-cart'>
                                {
                                    (movie.pelicula.genres).map((genre) => (
                                        <h4 key={genre.id}>{genre.name}</h4>
                                    ))
                                }

                            </div>

                        </div>

                        <div className='count-price-container'>
                            <span className='count-item-cart'>X{movie.cantidad}</span>
                            <span className='price-item-cart'>US$0.99</span>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default CartContainer