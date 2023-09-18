import { createContext, useState, useEffect } from "react";

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
    
    //shoping cart - order
    const [order, setOrder] = useState([])

    // get
    const [items, setItems] = useState(null)
    // filtrado de items
    const [filteredItems, setFilteredItems] = useState(null)
    //get items by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    
    // useEffect(()=> {
            //   fetch('https://api.escuelajs.co/api/v1/products').then(response => response.json()).then(data => setItems(data))
            // }, [])
        
    useEffect(()=> {
        fetch("./src/api/DB.json").then(response => response.json()).then(data => setItems(data))
    }, [])

    //funcion filtrados
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    useEffect(()=> {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        
    }, [items, searchByTitle])
    
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
            setCartOpen,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle, 
            setSearchByTitle,
            filteredItems
        }}>
        { children }
        </ShoppingContext.Provider>
    )
}

