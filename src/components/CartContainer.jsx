import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

// to={`/detail/${movie.pelicula.id}`}

let img_path = "https://image.tmdb.org/t/p/w500"
let img_path_original = "https://image.tmdb.org/t/p/original"

function CartContainer() {

    const { cartList, calcularPrecio, calcularTotalCart, deleteItem, setCartList, restarItems } = useCartContext()

    const onDelete = (movie) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: 'Confirma si quiere eliminar el producto.',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar',
            showClass: {
                popup: 'animate__animated animate__fadeInDown alert-delete'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            customClass: {
                popup: 'popup-alert',
                title: 'title-alert',
                container: 'alert-container',
                content: 'content-class',
                htmlContainer: 'html-container',
                validationMessage: 'message',
                icon: 'icon',
                confirmButton: 'confirm-button',

            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Eliminado!',
                    text: 'El producto fue eliminado del carrito.',
                    icon: 'success',
                    customClass: {
                        popup: 'popup-alert',
                        title: 'title-alert',
                        container: 'alert-container',
                        content: 'content-class',
                        htmlContainer: 'html-container',
                        validationMessage: 'message',
                        icon: 'icon',
                        confirmButton: 'confirm-button',

                    }
                })

                deleteItem(movie)

            }
        })
    }


    return (
        <>
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

                        cartList.length ? (cartList).map((movie) => (
                            <div className='link-container' key={movie.pelicula.id}>


                                <div className='item-container' style={{ backgroundImage: `url("${img_path_original + movie.pelicula.backdrop_path}")` }} >


                                    <img className='img-item-cart' src={img_path + movie.pelicula.poster_path} alt="" />

                                    <Link to={`/detail/${movie.pelicula.id}`} className='title-genre-container'>
                                        <h1 className="title-item-cart"> {movie.pelicula.title} </h1>
                                        <div className='genre-item-cart'>
                                            {
                                                (movie.pelicula.genres).map((genre) => (
                                                    <h4 key={genre.id}>{genre.name}</h4>
                                                ))
                                            }

                                        </div>

                                    </Link>

                                    <div className='count-container'>
                                        <span className='count-item-cart'>X{movie.cantidad}</span>
                                    </div>
                                    <div className='price-container'>
                                        <span className='price-item-cart'>${calcularPrecio(movie.pelicula)}</span>
                                    </div>
                                    <div className='total-item-container'>
                                        <span className='total-item-cart'>${(calcularPrecio(movie.pelicula) * movie.cantidad).toFixed(2)}</span>
                                    </div>

                                    <div className='delete-container' onClick={() => onDelete(movie)}>

                                        <i className="fa-solid fa-square-xmark delete-icon"></i>

                                    </div>
                                </div>
                            </div>
                        ))
                            :
                            <div className='cart-vacio'>
                                <span>No tienes elementos en el carrito</span>
                                <Link to="/" className='link'>← Volver al inicio</Link>
                            </div>
                    }
                </div>

                <div className="total-container">
                    {
                        cartList.length
                            ?
                            <div className='total'>
                                <span className='total-legend'>Total:</span>
                                <span className='total-value'>
                                    ${calcularTotalCart(cartList)}
                                </span>
                            </div>
                            :
                            ""
                    }
                    {
                        cartList.length
                            ?
                            <Link to='/' className='button-container'>
                                <button className='seguir-comprando'>
                                    Seguir comprando
                                </button>
                            </Link>
                            :
                            <Link to='/' className='button-container'>
                                <button className='seguir-comprando'>
                                    Volver al inicio
                                </button>
                            </Link>
                    }
                    {
                        cartList.length
                            ?
                            <Link to='/paymentform' className="finish-container">
                                <button className='finalizar-compra'>
                                    Finalizar compra
                                </button>
                            </Link>
                            :
                            ""
                    }
                </div>
            </div>
        </>

    )
}

export default CartContainer