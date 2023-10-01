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
      <h2>An inclusive open source community!</h2>
      <p className="home__text">
        Are you ready to become an Frontend Developer focused on Accessibility?<br />
        Especially for <b>people with disabilities and women of all ages</b>, YurisCodingClub aims to be a community with which <span className="upper">you</span> can achieve your goals.
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
        <Link href="https://hacktoberfest.com/">
          <Image src="/images/hf10_horz_fcd_rgb.png" alt="Official Hacktoberfest 2023 Website" width={250} height={85} />
        </Link>
      </div> */}
    </div>
  )
}

export default Home;
