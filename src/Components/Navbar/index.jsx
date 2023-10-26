import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingContext } from "../../Context"
import { GrCart } from "react-icons/gr"
import "./navbar.css"

const Navbar = () => {
    const context = useContext(ShoppingContext)
    const activeStyle = 'underline'
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-2 px-8 text-sm font-light top-0 bg-red-100">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink className={'OJ'} to='/'>
                        Shopi-Ecommerce
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                            onClick={()=>context.setSearchByCategory()}
                            //className={({ isActive }) => isActive ? activeStyle : undefined}
                            className={'todos'}
                    >
                        Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Shoes'
                            onClick={()=>context.setSearchByCategory('Shoes')}
                            //className={({ isActive }) => isActive ? activeStyle : undefined}
                            className={'Shoes'}
                    >
                        shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Electronics'
                            onClick={()=>context.setSearchByCategory('Electronics')}
                            //className={({ isActive }) => isActive ? activeStyle : undefined}
                            className={'Electronics'}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Others'
                            onClick={()=>context.setSearchByCategory('Others')}
                            //className={({ isActive }) => isActive ? activeStyle : undefined}
                            className={'Others'}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <input type="text" 
              placeholder="buscar" 
              className="border w-80 p-2 focus:outline-none"
              onChange={(event)=> context.setSearchByTitle(event.target.value)}
              />
            {/* medio */}
            <ul className="flex items-center gap-3">
                <li className="correo text-black/25">
                    mail@ecommerce.com
                </li>
                <li>
                    <NavLink to='/MyAccount'
                            //className={({ isActive }) => isActive ? activeStyle : undefined}
                            className={'cuenta'}
                    >
                        Mi cuenta
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Signin'
                            //className={({ isActive }) => isActive ? activeStyle : undefined}
                            className={'logueo'}
                    >
                        Signin
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="flex">
                        <div
                            onClick={()=>context.cartOpen()}
                        ><GrCart className="w-5 h-5"/></div>
                        <div>{ context.count }</div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar