import Head from "next/head";
import Layout from "../components/layout/Layout";
import Nav from "../components/Nav/Nav";
import Hero from "../components/ui/hero/Hero";

export default function Project() {
    return(
        <>
            {/* ========= Start: Document header ======== */}
            <Head>
                <title>
                    Builit | Project
                </title>
            </Head>
            {/* =========== end: Document header ======== */}
            <Hero bg={"bg-projectheader"} />
        </>
    )
}