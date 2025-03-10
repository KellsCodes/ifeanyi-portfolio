import { FaLink } from "react-icons/fa6";

export default function Card({ item }) {
    return (
        <a
            href={item.project_link}
            target="_blank"
            className="w-full py-6 px-0 sm:px-3 md:p-6 rounded-[14px] hover:bg-body space-y-2 font-secondary hover:transition-all duration-300 ease-in-out group"
        >
            <div className="w-[100px] h-13 pr-3 pl-0 py-2 shadow-xss rounded-[8px]">
                <img
                    src={`/${item.logo}`}
                    alt="project_title"
                    loading="lazy"
                    className="w-full h-full object-contain"
                />
            </div>
            <h2 className="font-bold text-md font-secondary text-link opacity-70 group-hover:opacity-100 transition-all duration-300 ease-in-out">{item.name}</h2>
            <p title={item.description} className="text-secondary group-hover:text-primary transition-all duration-300 ease-in-out text-sm font-primary leading-6 line-clamp-3">{item.description}</p>
            <ul className="text-xs font-primary text-secondary flex items-center gap-x-3 group-hover:text-link transition-all duration-300 ease-in-out mt-6">
                <li>
                    <FaLink className="text-[18px]" />
                </li>
                <li>View Project</li>
            </ul>
        </a>
    )
}