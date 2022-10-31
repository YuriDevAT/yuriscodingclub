import type { NextPage } from 'next'
import Link from 'next/link';

export const siteTitle = 'Yuris Coding Club';

const Home: NextPage = () => {
  return (
    <>
      <h1>
        Welcome to {siteTitle}!
      </h1>
      <p>
        Are you ready to become an Accessibility &amp; Frontend Developer?
      </p>
      <Link href="/about">
        <a>Let&apos;s get started &rarr;</a>
      </Link>
      <h2>Hacktoberfest 2022</h2>
      <p>Join Hacktoberfest by contributing to open source projects I provide for Yuris Coding Club.</p>
      <a href="https://github.com/YurisCodingClub">Check out the source projects</a>
      <div className="hacktober">
        <a href="https://hacktoberfest.com/">
          <img src="/images/hacktoberfest1.svg" alt="Hacktoberfest 2022" width={250} height={85} />
        </a>
      </div>
    </>
  )
}

export default Home;
