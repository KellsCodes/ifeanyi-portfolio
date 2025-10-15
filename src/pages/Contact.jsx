import { useEffect } from "react";
import ContactCard from "../components/ContactCard";
import HeroSection from "../components/Hero";
import Layout from "../layout/Layout";

export default function Contact() {

    useEffect(() => {
        document.title = `Ifeanyi Nworji Portfolio - Contact`
    }, [])
    return (
        <Layout>
            <HeroSection />
            <section className="space-y-8 mt-12">
                <h1 className="lg:w-[75%] font-[700] text-[45px] leading-12 text-primary font-secondary">
                    Connect with Me
                </h1>
                <p className="leading-7 font-medium font-primary text-secondary text-md">
                    Thank you for visiting my portfolio. I'm open to professional opportunities, collaborations
                    and technical discussions related to software development, backend engineering, and DevOps.
                </p>
                <p className="leading-7 font-medium font-primary text-secondary text-md">
                    For job opportunities or project inquiries, please reach out to me directly at
                    <a href="maito:nworjiifeanyi@gmail.com" target="_blank" className="ml-1 text-link">
                        nworjiifeanyi@gmail.com</a>. I typically respond within 24 hours. You can also connect with me on
                    <a href="https://www.linkedin.com/in/ifeanyi-nworji-619222b7" target="_blank" className="ml-1 text-link"> LinkedIn </a>
                    for professional networking.
                </p>
                <p className="leading-7 font-medium font-primary text-secondary text-md">
                    I look forward to connecting and exploring how we can build impactful solutions together.
                </p>
            </section>

            <div className="text-secondary text-sm font-bold font-primary space-y-6 mt-14 w-full md:w-50">
                <ContactCard />
            </div>
        </Layout>
    )
}