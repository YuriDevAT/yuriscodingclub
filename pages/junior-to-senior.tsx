import Head from 'next/head';
import Timer from '../components/Timer';

export const siteTitle = 'From Junior to Senior Developer';

const GetIntoCoding = () => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>{siteTitle}</h1>
      <Timer />
    </>
  )
}

export default GetIntoCoding;