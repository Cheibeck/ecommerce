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
    // filtrado por categorias
    const [searchByCategory, setSearchByCategory] = useState(null)
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
    //funcion filtrados por categoria
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    
    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if(searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchByTitle)
        }
        if(searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(!searchType){
            return items
        }
    }

    useEffect(()=> {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])
        
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
            filteredItems,
            searchByCategory, 
            setSearchByCategory,
            filteredItemsByCategory,
            
            
        }}>
        { children }
        </ShoppingContext.Provider>
    )
}

