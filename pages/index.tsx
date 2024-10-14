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
          <span className="home-button">Let&apos;s get started</span>
        </Link>
      </div>
    </div>
  )
}

export default Home;
