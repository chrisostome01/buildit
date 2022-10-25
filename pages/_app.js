import Head from 'next/head'
import Footer from '../components/ui/footer/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-[#F4F7FF]'>
      <Head>
       
        <link rel="icon" type="image/png" sizes="16x16" href="/buildit.svg" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
