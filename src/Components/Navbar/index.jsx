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
                        Ojitos Tiernos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                            //className={({ isActive }) => isActive ? activeStyle : undefined}
                            className={'todos'}
                    >
                        Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Amigurumis'
                            //className={({ isActive }) => isActive ? activeStyle : undefined}
                            className={'amigurumis'}
                    >
                        Amigurumis
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Plantas'
                            //className={({ isActive }) => isActive ? activeStyle : undefined}
                            className={'plantas'}
                    >
                        Plantas
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/otros'
                            //className={({ isActive }) => isActive ? activeStyle : undefined}
                            className={'otros'}
                    >
                        Otros
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="correo text-black/25">
                    topo@ojitostiernos.com.ar
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