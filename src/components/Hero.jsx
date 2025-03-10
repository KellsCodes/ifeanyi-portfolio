import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
    const [isSticky, setIsSticky] = useState(false)
    const heroRef = useRef(null)

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
        <div ref={heroRef} className="sticky top-10 mt-5 z-[999]">
            <div
                className={`bg-quaternary p-[2px] rounded-full transition-all duration-300 ${isSticky ? "h-14 w-14 shadow-md" : "h-20 w-20"
                    }`}
            >
                <img src="/personal_logo.webp" alt="logo" loading="lazy" className="rounded-full w-[100%] h-[100%] object-cover" />
            </div>
        </div>
    )
}