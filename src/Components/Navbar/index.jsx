import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingContext } from "../../Context"
import { GrCart } from "react-icons/gr"

const Navbar = () => {
    const context = useContext(ShoppingContext)
    const activeStyle = 'underline'
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-2 px-8 text-sm font-light top-0 bg-red-100">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Ojitos Tiernos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Amigurumis'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Amigurumis
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Plantas'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Plantas
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/otros'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Otros
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/25">
                    topo@ojitostiernos.com.ar
                </li>
                <li>
                    <NavLink to='/MyAccount'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Signin'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Signin
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className="flex">
                        <div><GrCart className="w-5 h-5"/></div>
                        <div>{ context.count }</div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar