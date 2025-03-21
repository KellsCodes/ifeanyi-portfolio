import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import routes from "../routes/routes"

function Navbar() {
    const location = useLocation()
    return (
        <nav className="flex items-center justify-center h-28 font-primary">
            <div className="flex items-center justify-center gap-x-4 md:gap-x-7 bg-white fixed z-[1000] md:w-80 top-[30px] h-10 rounded-full py-2 px-4 md:p-2 shadow-sm font-semibold text-sm">
                <Link
                    to={routes.home}
                    className={`${location.pathname === routes.home ? "text-link" : ""}`}
                >
                    Home
                </Link>
                <Link
                    to={routes.about}
                    className={`${location.pathname === routes.about ? "text-link" : ""}`}
                >
                    About
                </Link>
                <Link
                    to={routes.projects}
                    className={`${location.pathname === routes.projects ? "text-link" : ""}`}
                >
                    Projects
                </Link>
                <Link
                    to={routes.contact}
                    className={`${location.pathname === routes.contact ? "text-link" : ""}`}
                >
                    Contact
                </Link>

            </div>
        </nav>
    )
}

export default Navbar