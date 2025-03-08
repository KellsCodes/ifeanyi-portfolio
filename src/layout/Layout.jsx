import Navbar from "../components/Navbar";

function Layout({ children }) {
    return (
        <div className="bg-white mx-auto h-[250vh] w-[62vw] px-25">
            <Navbar />
            {/* <HeroSection /> */}
            {children}
        </div>
    )
}

export default Layout;