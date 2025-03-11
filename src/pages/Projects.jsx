import Card from "../components/Card";
import HeroSection from "../components/Hero";
import Layout from "../layout/Layout";
import projects from "../projects/projects";

export default function Projects() {
    return (
        <Layout>
            <HeroSection />
            <section className="lg:w-[75%] space-y-8 mt-8">
                <h1 className="font-[700] text-[40px] leading-12 text-primary font-secondary">
                    Things I’ve made trying to put my skills to use in providing solution.
                </h1>
                <p className="leading-7 font-medium font-primary text-secondary text-md">
                I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are live and available for others to use and explore. Please feel free to check them out on the projects page and I would like some feedback or suggestion for any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
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