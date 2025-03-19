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
                <p className="leading-9 font-medium font-primary text-secondary text-md">
                    Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at
                    <a href="maito:nworjiifeanyi@gmail.com" target="_blank" className="ml-1 text-link">
                        nworjiifeanyi@gmail.com</a>.
                    I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. If you prefer to connect on social media, you can find me on <a href="https://www.linkedin.com/in/ifeanyi-nworji-619222b7" target="_blank" className="text-link">LinkedIn</a> or <a href="https://web.facebook.com/ifeanyi.nworji.7/" target="_blank" className="text-link">Facebook</a>. Thanks again for your interest, and I look forward to hearing from you!
                </p>
            </section>

            <div className="text-secondary text-sm font-bold font-primary space-y-6 mt-14 w-full md:w-50">
                <ContactCard />
            </div>
        </Layout>
    )
}