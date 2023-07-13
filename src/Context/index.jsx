import React from "react";
import { createContext, useState } from "react";

export const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    //contador de shopping cart
    const [count, setCount] = useState(0)
    //apertura y cierre de detail
    const [isDetailOpen, setDetailOpen] = useState(false)
    const detailOpen = () => setDetailOpen(true)
    const detailClose = () => setDetailOpen(false)
    //mostrar imagenes en detail
    const [product, setProduct] = useState({})
    //carrito de compras
    const [cart, setCart] = useState([])
    const [isCartOpen, setCartOpen] = useState(false)
    const cartOpen = () => setCartOpen(true)
    const cartClose = () => setCartOpen(false)

    return (
        <ShoppingContext.Provider value={{
            count,
            setCount,
            detailOpen,
            detailClose,
            isDetailOpen,
            product,
            setProduct,
            cart,
            setCart,
            isCartOpen,
            cartOpen,
            cartClose,
            setCartOpen
        }}>
        { children }
        </ShoppingContext.Provider>
    )
}

