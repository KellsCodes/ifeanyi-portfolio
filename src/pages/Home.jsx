import HeroSection from "../components/Hero";
import Layout from "../layout/Layout";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub, IoIosLink } from "react-icons/io";
import { FaFacebookSquare, FaMailBulk } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import Card from "../components/Card";

export default function Home() {
    return (
        <Layout>
            <HeroSection />
            <div className="mt-5 w-full">
                <div className="flex items-center relative">
                    {/* Section description */}
                    <section className="w-[65%] pr-24 space-y-8">
                        <h1 className="font-[700] text-[40px] leading-12 text-primary font-secondary">Full-stack web developer with backend focus</h1>
                        <p className="leading-9 font-medium font-primary text-secondary text-md">
                            I am a full-stack developer (backend focus) with expertise in Django, Node.js, and React.js. I have experience building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
                        </p>
                    </section>

                    {/* section image */}
                    <div className="absolute h-[370px] w-[340px] rotate-3 rounded-[20px] p-[1px] right-0 drop-shadow-lg">
                        <img src="/personal_logo.webp" alt="bg-img" loading="lazy" className="h-[100%] w-[100%] rounded-[20px] object-cover" />
                    </div>
                </div>

                {/* Contacts */}
                <div className="h-20 flex items-center gap-x-5 text-primary opacity-80 text-[25px]">
                    <a href="https://www.linkedin.com/in/ifeanyi-nworji-619222b7" target="_blank"><BsLinkedin /></a>
                    <a href="https://github.com/KellsCodes" target="_blank"><IoLogoGithub /></a>
                    <a href="https://web.facebook.com/ifeanyi.nworji.7/" target="_blank"><FaFacebookSquare /></a>
                    <a href="mailto:nworjiifeanyi@gmail.com" target="_blank"><FaMailBulk /></a>
                    <a href="https://www.freecodecamp.org/kellscode" target="_blank"><FaFreeCodeCamp /></a>
                </div>

                {/* projects */}
                <div className="grid grid-cols-3 gap-3 my-10">
                    {
                        [1, 2, 3, 4, 5].map(item => (<Card item={item} />))
                    }
                </div>

            </div>
        </Layout>
    )
}
