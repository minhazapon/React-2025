import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import ResNav from "./ResNav"
import LogoTitle from "./LogoTitle"

function Root() {
    return (
        <div className="">
            <LogoTitle></LogoTitle>
            <ResNav></ResNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root

