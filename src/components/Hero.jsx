import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import routes from "../routes/routes"

export default function HeroSection() {
    const [isSticky, setIsSticky] = useState(false)
    const heroRef = useRef(null)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef?.current) {
                const offsetTop = heroRef.current.getBoundingClientRect().top;
                setIsSticky(offsetTop <= 40)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div ref={heroRef} className={`${location.pathname === routes.home ? "sticky top-10" : "fixed top-8 md:top-8 lg:top-4"} mt-5 z-[999]`}>
            <div
                className={`bg-quaternary p-[2px] rounded-full transition-all duration-300 ease-in-out ${(isSticky || location.pathname !== routes.home) ? "h-14 w-14 shadow-md" : "h-20 w-20"
                    }`}
            >
                <img src="/personal_logo.webp" alt="logo" loading="lazy" className="rounded-full w-full h-full object-cover" />
            </div>
        </div>
    )
}