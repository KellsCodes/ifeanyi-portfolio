import Layout from "../layout/Layout";

export default function Error404() {

    useEffect(() => {
        document.title = `Ifeanyi Nworji Portfolio - 404 Error`
    }, [])
    return (
        <Layout>
            <div>Page not found!!</div>
        </Layout>
    )
}