import HeroSection from "../components/Hero";
import Layout from "../layout/Layout";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import ContactCard from "../components/ContactCard";

export default function About() {
    return (
        <Layout>
            <HeroSection />
            {/* <div className="grid grid-cols-2 py-4">
                <div className="col-span-1 space-y-10">
                    <h1 className="font-secondary font-[700] text-[35px] leading-12">I'm Ifeanyi G. Nworji, I live in Nigeria where I help companies build the future.</h1>
                    <p className="leading-8 font-medium font-primary text-secondary text-md">
                        I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are live and available for others to use and explore. If you're interested in any of the projects I've worked on, please feel free to check out the project section and I would like some feedback or suggestion for any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
                    </p>
                </div>
                <div className="col-span-1 h-full relative">
                    <div className="absolute top-0 bottom-15 right-0 left-35 rotate-3 rounded-[30px] p-[1px] drop-shadow-lg">
                        <img src="/personal_logo.webp" alt="galery" loading="lazy" className="w-full h-full object-cover rounded-[30px]" />
                    </div>
                </div>
            </div> */}

            <div className="mt-14 flex flex-col flex-col-reverse gap-y-15 lg:gap-y-0 lg:flex-row lg:items-start lg:relative">
                {/* Section description */}
                <section className="lg:w-[65%] lg:pr-24 space-y-8">
                    <h1 className="font-[700] text-[40px] leading-12 text-primary font-secondary">
                        I'm Ifeanyi G. Nworji, I live in Nigeria where I help companies build the future.
                    </h1>
                    <p className="leading-9 font-medium font-primary text-secondary text-md">
                        I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are live and available for others to use and explore. If you're interested in any of the projects I've worked on, please feel free to check out the project section and I would like some feedback or suggestion for any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
                    </p>
                </section>

                {/* section image */}
                <div>
                    <div className="ml-3 lg:ml-0">
                        <div className="lg:relative lg:right-0 lg:top-0 h-[400px] md:h-[370px] w-[96%] sm:w-[340px] rotate-3 rounded-[20px] p-[1px] drop-shadow-lg">
                            <img src="/personal_logo.webp" alt="bg-img" loading="lazy" className="h-[100%] w-[100%] rounded-[20px] object-cover" />
                        </div>
                    </div>

                    <div className="hidden lg:block mt-10 p-2 w-full text-secondary text-sm font-bold font-primary space-y-6">
                        <ContactCard />
                    </div>

                </div>
            </div>

            <div className="lg:hidden text-secondary text-sm font-bold font-primary space-y-6 mt-8 w-full md:w-50">
                <ContactCard />
            </div>
        </Layout>
    )
}