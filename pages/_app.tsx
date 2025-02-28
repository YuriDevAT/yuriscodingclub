import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Layout from '../components/Layout';
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yuris Coding Club</title>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <Analytics />
        <SpeedInsights />
      </Layout>
    </>
  )
}
