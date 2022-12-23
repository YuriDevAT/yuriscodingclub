import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const siteTitle = 'Yuris Coding Club';

const Home: NextPage = () => {
  return (
    <div className="home">
      <h1>
        Welcome to <br />
        <Image src="/images/YurisCodingClub.svg" width={650} height={150} alt={siteTitle} />
      </h1>
      <p className="home__text">
        Are you ready to become an Frontend Developer focused on Accessibility?
      </p>
      <div className="button-container">
        <Link href="/about">
          <a className="home-button">Let&apos;s get started</a>
        </Link>
      </div>
      {/* <h2>Hacktoberfest 2022</h2>
      <p>YurisCodingClub was a maintainer project during Hacktoberfest. Issues were provided to all kind of contributors, such as first-time-contributors and no-code-contributors. </p>
      <p>YCC will be part of Hacktoberfest 2023 for sure. Stay tuned.</p>
      <a href="https://github.com/YurisCodingClub">Check out the source projects</a>
      <div className="hacktober-logo">
        <a href="https://hacktoberfest.com/">
          <img src="/images/hacktoberfest1.svg" alt="Go to Hacktoberfest 2022" width={250} height={85} />
        </a>
      </div> */}
    </div>
  )
}

export default Home;
