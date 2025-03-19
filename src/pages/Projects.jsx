import { useEffect } from "react";
import Card from "../components/Card";
import HeroSection from "../components/Hero";
import Layout from "../layout/Layout";
import projects from "../projects/projects";

export default function Projects() {

    useEffect(() => {
        document.title = `Ifeanyi Nworji Portfolio - Projects`
    }, [])
    return (
        <Layout>
            <HeroSection />
            <section className="lg:w-[75%] space-y-8 mt-8">
                <h1 className="font-[700] text-[40px] leading-12 text-primary font-secondary">
                    Projects Showcasing My Skills in Building Solutions
                </h1>
                <p className="leading-7 font-medium font-primary text-secondary text-md">
                    I take pride in the projects I’ve developed, many of which are live. Explore them and let me know if you have any thoughts on how they can be improved!
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-2 lg:my-10">
                {
                    projects.map(item => (<Card key={item.id} item={item} />))
                }
            </div>
        </Layout>
    )
}