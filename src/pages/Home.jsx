import HeroSection from "../components/Hero";
import Layout from "../layout/Layout";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookSquare, FaMailBulk } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import Card from "../components/Card";
import projects from "../projects/projects";
import { FaTools } from "react-icons/fa";

export default function Home() {
    return (
        <Layout>
            <HeroSection />
            <div className="mt-16 lg:mt-5 w-full">
                <div className="flex flex-col flex-col-reverse gap-y-15 lg:gap-y-0 lg:flex-row lg:items-center lg:relative">
                    {/* Section description */}
                    <section className="lg:w-[65%] lg:pr-24 space-y-8">
                        <h1 className="font-[700] text-[40px] leading-12 text-primary font-secondary">Full-stack web developer with backend focus</h1>
                        <p className="leading-9 font-medium font-primary text-secondary text-md">
                            I am a full-stack developer (backend focus) with expertise in Django, Node.js, and React.js. I have experience building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
                        </p>
                    </section>

                    {/* section image */}
                    <div className="ml-3 lg:ml-0">
                        <div className="lg:absolute lg:right-0 lg:top-0 h-[400px] md:h-[370px] w-[96%] sm:w-[340px] rotate-3 rounded-[20px] p-[1px] drop-shadow-lg">
                            <img src="/personal_logo.webp" alt="bg-img" loading="lazy" className="h-[100%] w-[100%] rounded-[20px] object-cover" />
                        </div>
                    </div>
                </div>

                {/* Contacts */}
                <div className="h-20 flex items-center gap-x-5 text-secondary opacity-90 text-[25px]">
                    <a href="https://www.linkedin.com/in/ifeanyi-nworji-619222b7" target="_blank" className="text-bluee-800" ><BsLinkedin /></a>
                    <a href="https://github.com/KellsCodes" target="_blank"><IoLogoGithub /></a>
                    <a href="https://web.facebook.com/ifeanyi.nworji.7/" target="_blank" className="text-bluee-600" ><FaFacebookSquare /></a>
                    <a href="mailto:nworjiifeanyi@gmail.com" target="_blank" className="text-redd-700"><FaMailBulk /></a>
                    <a href="https://www.freecodecamp.org/kellscode" target="_blank" className="text-greenn-900"><FaFreeCodeCamp /></a>
                </div>

                {/* projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-2 lg:my-10">
                    {
                        projects.map(item => (<Card key={item.id} item={item} />))
                    }
                </div>

                {/* tech stack and experience */}
                <div className="flex flex-col xl:flex-row items-center xl:justify-between gap-y-8 xl:gap-y-0 lg:gap-x-10 my-15 sm:px-3 lg:px-0">
                    <div className="w-full xl:w-[48%] space-y-5 border-l-2 border-l-link pl-4">
                        <h2 className="flex items-center gap-x-5 text-link font-primary"><FaTools /> Technical Skills</h2>
                        <div className="">
                            <ul className="font-primary text-xs space-y-4">
                                <li className="flex items-center gap-x-2 border-b border-b-quaternary pb-2">
                                    <h3 className="font-bold">Programming Languages:</h3>
                                    <p>Python, JavaScript</p>
                                </li>

                                <li className="flex items-center gap-x-2 border-b border-b-quaternary pb-2">
                                    <h3 className="font-bold">Frameworks & Libraries:</h3>
                                    <p>Django, Adonis.js, Express.js, React.js, TailwindCSS</p>
                                </li>

                                <li className="flex items-center gap-x-2 border-b border-b-quaternary pb-2">
                                    <h3 className="font-bold">Databases:</h3>
                                    <p>MySQL</p>
                                </li>

                                <li className="flex items-center gap-x-2 border-b border-b-quaternary pb-2">
                                    <h3 className="font-bold">DevOps & CI/CD:</h3>
                                    <p>Docker, Docker Compose, GitHub Actions</p>
                                </li>

                                <li className="flex gap-x-2 border-b border-b-quaternary pb-2">
                                    <h3 className="font-bold">Testing & Development:</h3>
                                    <p>Test-Driven Development(TDD), Unit Testing, Restfull API Development</p>
                                </li>

                                <li className="flex items-center gap-x-2 border-b border-b-quaternary pb-2">
                                    <h3 className="font-bold">Other tools:</h3>
                                    <p>WebSockets, AI Analytics</p>
                                    {/* <p className="text-xs">Redis, WebSockets, Nginx, Celery, AI Analytics</p> */}
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="w-full xl:w-[52%] space-y-5 md:border border-quaternary rounded-[18px] py-5 md:p-8">
                        <h2 className="flex items-center gap-x-5 text-primary font-primary opacity-70"><FaBriefcase /> Work Experience</h2>
                        {projects.map(item => <div key={item.id} className="font-primary text-secondary">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2 flex items-center gap-x-6">
                                    <div className="w-[100px] h-13 px-3 py-2 shadow-xs rounded-[8px]">
                                        <img
                                            src={`/${item.logo}`}
                                            alt="project_img"
                                            loading="lazy"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between h-full py-1">
                                        <h3 className="text-md font-bold text-primary">{item.name}</h3>
                                        <p className="text-xs">{item.position}</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex items-end justify-end text-xs py-1">
                                    <p>{item.year}</p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>

            </div>
        </Layout>
    )
}
