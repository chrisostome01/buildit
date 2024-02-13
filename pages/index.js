import Head from 'next/head'
import Innovation from '../components/ui/innovation/Innovation';
import Header from '../components/ui/Header/Header';
import About from '../components/ui/aboutus/AboutUs';
import Feature from '../components/ui/feature/Feature';
import Instagram from '../components/ui/Instagram/Instagram';
import ContactUs from '../components/ui/contact/Contact';


export default function Home() {
  return (
    <>
      {/* =========== Start: Document header ======== */}
        <Head>
          <title>
            Builit | home
          </title>
        </Head>
      {/* ============= end: Document header ======== */}

      {/* =========== Start: Header section ========= */}
        <Header />
      {/* ============= end: Header section ========= */}

      {/* ======= Start: innovation section ========= */}
        <Innovation />
      {/* ========= End: innovation section ========= */}

      {/* ========== Start: brand section =========== */}
        <About />
      {/* ============ End: brand section =========== */}

      {/* ========= Start: Feature section ========== */}
        <Feature />
      {/* =========== End: Feature section ========== */}
      
      {/* ========= Start: Instagram section ======== */}
        <Instagram />
      {/* =========== End: Instagram section ======== */}
      
      {/* ========= Start: Contact us section ======= */}
        <ContactUs />
      {/* =========== End: Contact us section ======= */}
    </>
  )
}
