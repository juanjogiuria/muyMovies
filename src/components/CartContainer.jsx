import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

let img_path = "https://image.tmdb.org/t/p/w500"
let img_path_original = "https://image.tmdb.org/t/p/original"

function CartContainer() {

    const { cartList } = useCartContext()

    console.log(cartList)


    return (
        <div className='cart-container'>
            <div className='info-container'>
                <div className='title-container'>
                    <h1>Mi carrito de compras:</h1>
                </div>
                <Link to='/' className='button-container'>
                    <button className='seguir-comprando'>
                        Seguir comprando
                    </button>
                </Link>

            </div>

            <div className='all-items-container'>
                {
                    (cartList).map((movie) => (
                        <Link className='link-container' to={`/detail/${movie.pelicula.id}`}>

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
                        </Link>
                    ))
                }
            </div>

            <div className="total-container">

            </div>
        </div>
    )
}

export default CartContainer