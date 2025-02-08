import { NavLink } from "react-router-dom"


function ResNav() {

    const RNav = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>
        <li><NavLink to='/Page'>Page</NavLink></li>
        <li><NavLink to='/Menu'>Menu</NavLink></li>
        <li><NavLink to='/Shop'>Shop</NavLink></li>
        <li><NavLink to='/News'>News</NavLink></li>
        <li><NavLink to='/Contact'>Contact</NavLink></li>

    </>


    return (
        <div className="">
            <div className="navbar flex justify-center bg-base-100">
                <div className="navbar-center ">
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
                            {RNav}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {RNav}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    )
}

export default ResNav
