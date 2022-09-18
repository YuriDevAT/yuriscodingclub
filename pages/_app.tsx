import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yuris Coding Club</title>
        <meta name="description" content="Learn how to become an accessibility and frontend developer yourself" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="/images/logo.svg" />
        <meta name="og:title" content="Yuris Coding Club" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
