import Head from "next/head";
import Layout from "../components/layout/Layout";
import Nav from "../components/Nav/Nav";
import Contact from "../components/ui/contact/Contact";

export default function ContactUs() {
    return(
        <div className="bg-main">
            {/* ========= Start: Document header ======== */}
             <Head>
                <title>
                    Builit | Conatct us
                </title>
            </Head>
            {/* =========== end: Document header ======== */}
            
            {/* ========= Start: NavBar ======== */}
                <Layout>
                    <Nav />
                </Layout>
            {/* =========== end: NavBar ======== */}

            {/* ========= Start: Contact as form ======== */}
                <Contact />
            {/* ========= Start: Contact as form ======== */}
        </div>
    )
}