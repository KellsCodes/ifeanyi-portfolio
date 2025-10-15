import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import routes from "../routes/routes";

function Layout({ children }) {
    return (
        <div className="bg-white mx-auto md:w-[95vw] lg:w-[90vw] xl:w-[80vw] 2xl:w-[75vw] 3xl:w-[62vw]">
            <div className="px-4 md:px-12 lg:px-25">
                <Navbar />
                {children}

            </div>

            {/* footer */}
            <footer>
                <div className="px-4 md:px-12 lg:px-25 border-t-2 border-t-quaternary h-25 md:h-20 flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-y-0 md:justify-between text-sm font-primary text-secondary">
                    <div className="flex items-center gap-x-10">
                        <Link to={routes.home} className="hover:text-link">Home</Link>
                        <Link to={routes.about} className="hover:text-link">About</Link>
                        <Link to={routes.projects} className="hover:text-link">Projects</Link>
                        <Link to={routes.contact} className="hover:text-link">Contact</Link>
                    </div>
                    <div>{new Date().getFullYear()}, Ifeanyi Nworji.</div>
                </div>
            </footer>
        </div>
    )
}

export default Layout;