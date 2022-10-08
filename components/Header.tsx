import Link from 'next/link';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header-outer">
      <div className="header-inner">
        <Link href="/">
          <div className="logo-container">
            <a className="logo" aria-label="back to home">
            </a>
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;