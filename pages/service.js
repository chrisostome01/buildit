import Head from "next/head";
import Listing from "../components/ui/feature/Listing";
import Hero from "../components/ui/hero/Hero";

export default function Service() {
    return(
        <>
        {/* ========= Start: Document header ============ */}
            <Head>
                <title>
                    Builit | Service
                </title>
            </Head>
        {/* =========== end: Document header ============ */}

        {/* =========== start: Header =================== */}
            <Hero bg={"bg-aboutHeader"} />
        {/* =================== end: Header ============== */}

        {/* ====================== start: Listing ======== */}
            <Listing img={"/service/housesky.png"} />
        {/* ================= end: Listing  ============== */}

        {/* ================= start: Feature  ============= */}
            <Listing img={"/service/housegreen.png"} />
        {/* ================= end: Feature  =============== */}
    </>
    )
}