import { useEffect } from "react";
import Layout from "../layout/Layout";
import routes from "../routes/routes";
import { Link } from "react-router-dom";

export default function Error404() {

    useEffect(() => {
        document.title = `Ifeanyi Nworji Portfolio - 404 Error`
    }, [])
    return (
        <div className="h-[80vh] flex flex-col items-center justify-center">
            <div className="h-[350px] w-full sm:w-[340px] p-2 sm:p-0 text-center space-y-3">
                <h1 className="text-[40px] sm:text-[100px] font-700 text-primary font-secondary">404</h1>
                <h2 className="text-[25px] sm:text-[40px] font-700 text-primary font-secondary">Page Not Found</h2>
                <p className="text-md font-bold text-primary font-secondary">The page you are looking for doesn't exists or an other error occured. Go to <Link to={routes.home} className="text-link">Home Page</Link> </p>
            </div>
            {/* <div className="flex flex-col items-center justify-center">
                </div> */}
        </div>
    )
}