import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)





export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (newMovie, cantidad) => {
        let searchMovie = cartList.find(movie => movie.pelicula === newMovie)
        console.log(searchMovie)

        if(cantidad>0){

            if(!searchMovie){
                setCartList([...cartList, {pelicula:newMovie,  cantidad:cantidad}])
            }
            else{
                
            }

        }

    }
    console.log(cartList)

    return (
            <CartContext.Provider value={{
                cartList,
                addToCart
            }}>

                {children}

            </CartContext.Provider>
    )
}