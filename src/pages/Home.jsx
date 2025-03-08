import HeroSection from "../components/Hero";
import Layout from "../layout/Layout";

export default function Home() {
    return (
        <Layout>
            <HeroSection />
            <div className="mt-3 w-full">
                <div className="flex items-center gap relative">
                    <section className="w-[70%] pr-24 ">
                        <h1 className="font-[700] text-[45px] text-primary">Full-stack web developer with backend focus</h1>
                        <p>
                            I am a full-stack developer (backend focus) with expertise in Django, Node.js, and React.js. I have experience building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
                        </p>
                    </section>
                    <div className="absolute h-[340px] w-[320px] rotate-3 rounded-[20px] p-[1px] right-0 drop-shadow-lg">
                        <img src="/personal_logo.webp" alt="bg-img" loading="lazy" className="h-[100%] w-[100%] rounded-[20px] object-cover" />
                    </div>
                </div>

            </div>
        </Layout>
    )
}
