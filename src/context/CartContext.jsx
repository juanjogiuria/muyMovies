import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)





export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    const calcularPrecio = (movie) => {
        if ((parseInt(movie.release_date.slice(0, 4)) === 2023)) {
            return 2.99
        } if ((parseInt(movie.release_date.slice(0, 4)) < 2023) && (parseInt(movie.release_date.slice(0, 4)) > 2019)) {
            return 1.99
        } else {
            return 0.99
        }
    }

    const calcularTotalCart = (arrayCart) => {
        let precio = 0;
        if (arrayCart.length != 0) {
            arrayCart.map((cart) => (
                precio = precio + (cart.precio * cart.cantidad)
            ))
        }
        return precio
    }

    const addToCart = (newMovie, cantidad) => {
        let searchMovie = cartList.find(movie => movie.pelicula === newMovie)
        let precio = calcularPrecio(newMovie)


        if (cantidad > 0) {

            if (!searchMovie) {
                setCartList([...cartList, { pelicula: newMovie, cantidad: cantidad, precio: precio }])
            }
            else {

            }

        }

    }

    const sumarItems = (cantidad) => {
        setTotalItems(totalItems + cantidad)
    }

    const deleteItem = (movie) => {
        console.log(movie)
        console.log(cartList.indexOf(movie))
        console.log(cartList)

        const newCart = cartList.slice()
        newCart.splice(newCart.indexOf(movie), 1)
        setCartList(newCart)

    }


    return (
        <CartContext.Provider value={{
            cartList,
            totalItems,
            addToCart,
            sumarItems,
            calcularPrecio,
            calcularTotalCart,
            deleteItem

        }}>

            {children}

        </CartContext.Provider>
    )
}