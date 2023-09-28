import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header-outer">
      <div className="header-inner">
        <Link href="/">
          <div className="logo-container">
            <Link className="logo" aria-label="Go to homepage" href="/">
              <Image
                src="/images/YCC.svg"
                alt=""
                height={90}
                width={130} />
            </Link>
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;