import { NavLink } from "react-router-dom"

const Navbar = () => {
    const activeStyle = 'underline'
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
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
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Others
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
                    <NavLink to='/'>
                        carrito
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar