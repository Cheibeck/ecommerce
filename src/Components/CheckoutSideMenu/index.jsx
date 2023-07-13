import "./checkout.css"
import { GiCrossMark } from 'react-icons/gi'
import { useContext } from "react"
import { ShoppingContext } from "../../Context"
import OrderCard from "../OrderCard"
import { totalPrice } from "../../utils"

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingContext)
    
    const handleDelete = (id) => {
        const filteredProducts = context.cart.filter(product => product.id != id)
        context.setCart(filteredProducts)
        context.setCount(context.count - 1)
    }

    return (
        <aside className={`${context.isCartOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-2">
                <h2 className="font-medium text-xl">Orden</h2>
                <span className="abolsolute cursor-pointer"
                      onClick={()=>context.cartClose()}
                ><GiCrossMark /></span>
            </div>
            <div className="px-2 overflow-y-scroll">
                {
            context.cart.map((product)=>(
                <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageURL={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                />
            ))
            }
            </div>
            <div className="px-6 mt-2">
                <p className="flex justify-between items-center">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-xl">${totalPrice(context.cart)}</span>
                </p>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu