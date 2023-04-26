import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

// to={`/detail/${movie.pelicula.id}`}

let img_path = "https://image.tmdb.org/t/p/w500"
let img_path_original = "https://image.tmdb.org/t/p/original"

function CartContainer() {

    const { cartList, calcularPrecio, calcularTotalCart, deleteItem, setCartList } = useCartContext()

    const onDelete = (movie) => {
            deleteItem(movie)
    }




    return (
        <div className='cart-container'>
            <div className='info-container'>
                <div className='title-container'>
                    <h1>Mi carrito de compras:</h1>
                </div>
            </div>
            <div className='reference-container'>
                <span className='reference-pelicula'>Pelicula</span>
                <span className='reference-cantidad'>Cantidad</span>
                <span className='reference-precio-unidad'>Precio x Unidad</span>
                <span className='reference-precio-total'>Precio total</span>
            </div>

            <div className='all-items-container'>
                {
                    (cartList).map((movie) => (
                        <Link className='link-container' key={movie.pelicula.id}>


                            <div className='item-container' style={{ backgroundImage: `url("${img_path_original + movie.pelicula.backdrop_path}")` }} >


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

                                <div className='count-container'>
                                    <span className='count-item-cart'>X{movie.cantidad}</span>
                                </div>
                                <div className='price-container'>
                                    <span className='price-item-cart'>${calcularPrecio(movie.pelicula)}</span>
                                </div>
                                <div className='total-item-container'>
                                    <span className='total-item-cart'>${calcularPrecio(movie.pelicula) * movie.cantidad}</span>
                                </div>

                                <div className='delete-container' onClick={() => onDelete(movie)}>
                                    
                                    <i className="fa-solid fa-square-xmark delete-icon"></i>

                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className="total-container">
                <div className='total'>
                    <span className='total-legend'>Total:</span>
                    <span className='total-value'>
                        usd${calcularTotalCart(cartList)}
                    </span>
                </div>
                <Link to='/' className='button-container'>
                    <button className='seguir-comprando'>
                        Seguir comprando
                    </button>
                </Link>
                <div className="finish-container">
                    <button className='finalizar-compra'>
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartContainer