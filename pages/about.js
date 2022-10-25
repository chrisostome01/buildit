/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Development from "../components/ui/develompent/Development";
import AboutHeader from "../components/ui/Header/AboutHeader";
import Team from "../components/ui/team/Team";

export default function About() {
    return(
        <div>
            {/* ========= Start: Document header ======== */}
                <Head>
                    <title>
                        Builit | About
                    </title>
                </Head>
            {/* =========== end: Document header ======== */}
            {/* ======== start: Header section ========== */}
                <AboutHeader />
            {/* ========== end: Header section ========== */}

            {/* ====== start: Development section ======= */}
                <Development />
            {/* ======= end: Development section ======== */}

            {/* ============ start: Team section ======== */}
                <Team />
            {/* ============= end: Team section ========= */}
        </div>
    )
}