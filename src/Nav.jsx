import { NavLink } from "react-router-dom"

function Nav() {
    const NavZ = <>
        <li className=" text-xs "><NavLink to='/'>Home</NavLink></li>
        <li className=" text-xs "><NavLink to='/compo'>components</NavLink></li>
        <li className=" text-xs "><NavLink to='/fragments'>fragments</NavLink></li>
        <li className=" text-xs "><NavLink to='/dvalue'>Dynamic Value</NavLink></li>
        <li className=" text-xs "><NavLink to='/cr'>Conditional Rendering</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 p-5 shadow">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavZ}
                        </ul>
                    </div>
                    <div className=" flex items-center gap-2 ">
                        <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/3393/3393920.png" alt="" />
                        <a className="text-xl">React 2025</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavZ}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
