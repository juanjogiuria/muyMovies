import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)





export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [totalItems, setTotalItems] = useState(0)

    const addToCart = (newMovie, cantidad) => {
        let searchMovie = cartList.find(movie => movie.pelicula === newMovie)

        if(cantidad>0){

            if(!searchMovie){
                setCartList([...cartList, {pelicula:newMovie,  cantidad:cantidad}])
            }
            else{
                
            }

        }

    }

    const sumarItems = (cantidad) => {
        setTotalItems(totalItems + cantidad)
    }


    return (
            <CartContext.Provider value={{
                cartList,
                totalItems,
                addToCart,
                sumarItems

            }}>

                {children}

            </CartContext.Provider>
    )
}