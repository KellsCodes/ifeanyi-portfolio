import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import routes from "../routes/routes";

function Layout({ children }) {
    return (
        <div className="bg-white mx-auto w-[62vw]">
            <div className="px-25">
                <Navbar />
                {children}

            </div>

            {/* footer */}
            <footer>
                <div className="px-25 border-t-2 border-t-quaternary h-20 flex items-center justify-between text-sm font-primary text-secondary">
                    <div className="flex items-center gap-x-10">
                        <Link to={routes.home} className="hover:text-link">Home</Link>
                        <Link to={routes.about} className="hover:text-link">About</Link>
                        <Link to={routes.projects} className="hover:text-link">Projects</Link>
                        <Link to={routes.contact} className="hover:text-link">Contact</Link>
                    </div>
                    <div>&copy; {new Date().getFullYear()} Ifeanyi Nworji. All Rights Reserved</div>
                </div>
            </footer>
        </div>
    )
}

export default Layout;