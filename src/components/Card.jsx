import { FaLink } from "react-icons/fa6";

export default function Card({ item }) {
    return (
        <a
            key={item}
            href="#"
            target="_blank"
            className="w-full p-6 rounded-[14px] hover:bg-body space-y-4 font-secondary hover:transition-all duration-300 ease-in-out group"
        >
            <div className="w-12 h-12">
                <img src="/personal_logo.webp" alt="project_title" loading="lazy" className="w-[100%] h-[100%] object-cover rounded-full" />
            </div>
            <h2 className="font-bold text-md font-secondary text-primary opacity-70 group-hover:opacity-100 transition-all duration-300 ease-in-out">Project {item}</h2>
            <p className="text-secondary group-hover:text-primary transition-all duration-300 ease-in-out text-sm font-primary leading-6">I have experience building scalable, secure and reliable web applications using various frameworks and technologies.</p>
            <ul className="text-xs font-primary text-secondary flex items-center gap-x-3 group-hover:text-link transition-all duration-300 ease-in-out">
                <li>
                    <FaLink className="text-[18px]" />
                </li>
                <li>View Project</li>
            </ul>
        </a>
    )
}