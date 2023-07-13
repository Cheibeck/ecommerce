import { GiCrossMark } from 'react-icons/gi'
import { totalPrice } from '../../utils'

const OrderCard = props =>{
    
    const { id, title, imageURL, price, handleDelete } = props
    return(
        <div className="flex justify-between items-center mb-1">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-auto'>
                    <img className='w-full h-auto rounded-lg object-cover' src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                <span className="abolsolute cursor-pointer"
                      
                ><GiCrossMark 
                    onClick={() => (
                        handleDelete(id)
                        
                    )}
                /></span>
            </div>
        </div>
    )
}

export default OrderCard