import Navbar from "../components/Navbar";

function Layout({ children }) {
    return (
        <div className="bg-white mx-auto h-[100vh] w-[62vw]">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;