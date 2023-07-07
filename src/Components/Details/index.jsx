import "./Details.css"
import { GiCrossMark } from 'react-icons/gi'

const Details = () => {
    return (
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
            <div className="flex justify-between items-center p-2">
                <h2 className="font-medium text-xl">Detalles</h2>
                <div><GiCrossMark /></div>
            </div>
        </aside>
    )
}

export default Details