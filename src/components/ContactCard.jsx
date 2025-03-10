import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare, FaFreeCodeCamp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";

export default function ContactCard() {
    return (
        <>
            <a href="https://www.linkedin.com/in/ifeanyi-nworji-619222b7" target="_blank" className="flex items-center gap-x-4">
                <BsLinkedin className="text-lg" />
                <span>Follow on LinkedIn</span>
            </a>

            <a href="https://github.com/KellsCodes" target="_blank" className="flex items-center gap-x-4" >
                <IoLogoGithub className="text-lg" />
                <span>Follow on GitHub
                </span>
            </a>
            <a href="https://web.facebook.com/ifeanyi.nworji.7/" target="_blank" className="flex items-center gap-x-4" >
                <FaFacebookSquare className="text-lg" />
                <span>
                    Follow on Facebook
                </span>
            </a>
            <a href="https://www.freecodecamp.org/kellscode" target="_blank" className="flex items-center gap-x-4">
                <FaFreeCodeCamp className="text-lg" />
                <span>
                    Follow on Freecodecamp
                </span>
            </a>
            <div className="border-t-2 border-t-quaternary my-7" />
            <a href="mailto:nworjiifeanyi@gmail.com" target="_blank" className="flex items-center gap-x-4 mb-20">
                <IoMdMail className="text-lg" />
                nworjiifeanyi@gmail.com
            </a>
        </>
    )
}