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
        return precio.toFixed(2)
    }

    const sumarItems = () => {
        setTotalItems(totalItems + 1)
    }

    const restarItems = () => {
        setTotalItems(totalItems - 1)
    }

    const modificarCantidad = (id, count) => {
        const nuevoArray = cartList.map(obj => {
            if(obj.pelicula.id === id){
                const nuevaCantidad = obj.cantidad + count
                return {...obj, cantidad:nuevaCantidad }
            }else{
                return obj
            }
        })
        setCartList(nuevoArray)
    }

    const addToCart = (newMovie, cantidad) => {
        let searchMovie = cartList.find(movie => movie.pelicula === newMovie)
        let precio = calcularPrecio(newMovie)


        if (cantidad > 0) {
            

            if (!cartList.some(movie => movie.pelicula.id === newMovie.id)) {
                setCartList([...cartList, { pelicula: newMovie, cantidad: cantidad, precio: precio }])
                sumarItems()
            }
            else {
                modificarCantidad(newMovie.id, cantidad)
            }

        }

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
            restarItems,
            calcularPrecio,
            calcularTotalCart,
            deleteItem

        }}>

            {children}

        </CartContext.Provider>
    )
}