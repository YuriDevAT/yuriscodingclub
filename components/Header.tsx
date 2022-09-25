import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header-outer">
      <div className="header-inner">
        <Link href="/">
          <a>
            <Image priority src="/images/logo.svg" height={80} width={305} alt="Yuris Coding Club" />
          </a>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;