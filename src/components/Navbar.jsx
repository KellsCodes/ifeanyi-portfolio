import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import routes from "../routes/routes"

function Navbar() {
    const location = useLocation()
    return (
        <nav className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-x-7 fixed w-80 top-[30px] h-10 rounded-full p-2 shadow font-semibold text-sm">
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